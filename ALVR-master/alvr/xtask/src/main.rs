use fs_extra::{self as fsx, dir as dirx};
use pico_args::Arguments;
use std::{
    env,
    error::Error,
    fs,
    io::{Read, Write},
    path::{Path, PathBuf},
    process::{Command, Stdio},
};

const HELP_STR: &str = r#"
cargo xtask
Developement actions for ALVR.

USAGE:
    cargo xtask <SUBCOMMAND> [FLAG]

SUBCOMMANDS:
    build-server        Build server driver and GUI, then copy binaries to build folder
    build-client        Build client, then copy binaries to build folder
    publish             Build server and client in release mode, zip server and copy the pdb file.
    clean               Removes build folder
    kill-oculus         Kill all Oculus processes

FLAGS:
    --release           Optimized build without debug info. Used only for build subcommands
    --help              Print this text
"#;

type BResult<T = ()> = Result<T, Box<dyn Error>>;

#[cfg(target_os = "linux")]
const SERVER_BUILD_DIR_NAME: &str = "alvr_server_linux";
#[cfg(windows)]
const SERVER_BUILD_DIR_NAME: &str = "alvr_server_windows";

#[cfg(target_os = "linux")]
const STEAMVR_OS_DIR_NAME: &str = "linux64";
#[cfg(windows)]
const STEAMVR_OS_DIR_NAME: &str = "win64";

#[cfg(target_os = "linux")]
const DRIVER_FNAME: &str = "driver_alvr_server.so";
#[cfg(windows)]
const DRIVER_FNAME: &str = "driver_alvr_server.dll";

#[cfg(target_os = "linux")]
pub fn exec_fname(name: &str) -> String {
    name.to_owned()
}
#[cfg(windows)]
pub fn exec_fname(name: &str) -> String {
    format!("{}.exe", name)
}

#[cfg(target_os = "linux")]
fn dynlib_fname(name: &str) -> String {
    format!("lib{}.so", name)
}
#[cfg(windows)]
fn dynlib_fname(name: &str) -> String {
    format!("{}.dll", name)
}

fn run_with_args(cmd: &str, args: &[&str]) -> BResult {
    println!(
        "\n{}",
        args.iter().fold(String::from(cmd), |s, arg| s + " " + arg)
    );
    let output = Command::new(cmd)
        .args(args)
        .stdout(Stdio::inherit())
        .spawn()?
        .wait_with_output()?;

    if output.status.success() {
        Ok(())
    } else {
        Err(format!(
            "Command failed: {}",
            String::from_utf8_lossy(&output.stderr)
        )
        .into())
    }
}

fn run(cmd: &str) -> BResult {
    let cmd_args = cmd.split_whitespace().collect::<Vec<_>>();
    run_with_args(cmd_args[0], &cmd_args[1..])
}

pub fn target_dir() -> PathBuf {
    Path::new(env!("OUT_DIR")).join("../../../..")
}

pub fn workspace_dir() -> PathBuf {
    Path::new(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .unwrap()
        .parent()
        .unwrap()
        .into()
}

pub fn build_dir() -> PathBuf {
    workspace_dir().join("build")
}

pub fn server_build_dir() -> PathBuf {
    build_dir().join(SERVER_BUILD_DIR_NAME)
}

pub fn remove_build_dir() {
    let build_dir = build_dir();
    fs::remove_dir_all(&build_dir).ok();
}

pub fn reset_server_build_folder() -> BResult {
    fs::remove_dir_all(&server_build_dir()).ok();
    fs::create_dir_all(&server_build_dir())?;

    // get all file and folder paths at depth 1, excluded template root (at index 0)
    let dir_content =
        dirx::get_dir_content2("server_release_template", &dirx::DirOptions { depth: 1 })?;
    let items = dir_content.directories[0..]
        .iter()
        .chain(dir_content.files.iter())
        .collect();

    fsx::copy_items(&items, server_build_dir(), &dirx::CopyOptions::new())?;

    Ok(())
}

// https://github.com/mvdnes/zip-rs/blob/master/examples/write_dir.rs
fn zip_dir(dir: &Path) -> BResult {
    let parent_dir = dir.parent().unwrap();
    let zip_file = fs::File::create(parent_dir.join(format!(
        "{}.zip",
        dir.file_name().unwrap().to_string_lossy()
    )))?;
    let mut zip = zip::ZipWriter::new(zip_file);

    let mut buffer = Vec::new();
    let iterator = walkdir::WalkDir::new(dir)
        .into_iter()
        .filter_map(|e| e.ok());
    for entry in iterator {
        let path = entry.path();
        let name = path.strip_prefix(Path::new(parent_dir))?;

        // Write file or directory explicitly
        // Some unzip tools unzip files with directory paths correctly, some do not!
        if path.is_file() {
            println!("adding file {:?} as {:?} ...", path, name);
            zip.start_file_from_path(name, <_>::default())?;
            let mut f = fs::File::open(path)?;

            f.read_to_end(&mut buffer)?;
            zip.write_all(&*buffer)?;
            buffer.clear();
        } else if !name.as_os_str().is_empty() {
            // Only if not root! Avoids path spec / warning
            // and mapname conversion failed error on unzip
            println!("adding dir {:?} as {:?} ...", path, name);
            zip.add_directory_from_path(name, <_>::default())?;
        }
    }

    Ok(())
}

pub fn build_server(is_release: bool, fetch_crates: bool) -> BResult {
    let build_type = if is_release { "release" } else { "debug" };
    let build_flag = if is_release { "--release" } else { "" };

    let target_dir = target_dir();
    let artifacts_dir = target_dir.join(build_type);
    let driver_dst_dir = server_build_dir().join("bin").join(STEAMVR_OS_DIR_NAME);
    let swresample_dir = workspace_dir().join("alvr/server_driver/cpp/libswresample/lib");
    let openvr_api_dir = workspace_dir().join("alvr/server_driver/cpp/openvr/lib");

    reset_server_build_folder()?;
    fs::create_dir_all(&driver_dst_dir)?;

    if fetch_crates {
        run("cargo update")?;
    }

    run(&format!(
        "cargo build -p alvr_server_driver -p alvr_web_server -p alvr_server_bootstrap {}",
        build_flag
    ))?;
    fs::copy(
        artifacts_dir.join(dynlib_fname("alvr_server_driver")),
        driver_dst_dir.join(DRIVER_FNAME),
    )?;
    fs::copy(
        swresample_dir.join("avutil-56.dll"),
        driver_dst_dir.join("avutil-56.dll"),
    )?;
    fs::copy(
        swresample_dir.join("swresample-3.dll"),
        driver_dst_dir.join("swresample-3.dll"),
    )?;
    fs::copy(
        openvr_api_dir.join("openvr_api.dll"),
        driver_dst_dir.join("openvr_api.dll"),
    )?;
    fs::copy(
        artifacts_dir.join(exec_fname("alvr_web_server")),
        server_build_dir().join(exec_fname("alvr_web_server")),
    )?;
    fs::copy(
        artifacts_dir.join(exec_fname("alvr_server_bootstrap")),
        server_build_dir().join(exec_fname("ALVR")),
    )?;

    // if cfg!(target_os = "linux") {
    //     use std::io::Write;

    //     let mut shortcut = str_err(
    //         fs::OpenOptions::new()
    //             .append(true)
    //             .open(release_dir.join("alvr.desktop")),
    //     )?;
    //     str_err(writeln!(
    //         shortcut,
    //         "Exec={}",
    //         gui_dst_path.to_string_lossy()
    //     ))?;
    // }

    Ok(())
}

pub fn build_client(is_release: bool) -> BResult {
    let build_type = if is_release { "release" } else { "debug" };
    let build_task = if is_release {
        "assembleRelease"
    } else {
        "assembleDebug"
    };

    let client_hmd_dir = workspace_dir().join("alvr/client_hmd");
    let command_name = if cfg!(not(windows)) {
        "gradlew"
    } else {
        "gradlew.bat"
    };

    fs::create_dir_all(&build_dir())?;

    env::set_current_dir(&client_hmd_dir)?;
    run(&format!("{} {}", command_name, build_task))?;
    env::set_current_dir(workspace_dir())?;

    fs::copy(
        client_hmd_dir
            .join("app/build/outputs/apk")
            .join(build_type)
            .join(format!("app-{}.apk", build_type)),
        build_dir().join("alvr_client.apk"),
    )?;

    Ok(())
}

pub fn build_publish() -> BResult {
    build_server(true, false)?;
    build_client(true)?;
    zip_dir(&server_build_dir())?;

    if cfg!(windows) {
        fs::copy(
            target_dir().join("release").join("alvr_server_driver.pdb"),
            build_dir().join("alvr_server_driver.pdb"),
        )?;
    }

    Ok(())
}

// Avoid Oculus link popups when debugging the client
pub fn kill_oculus_processes() {
    runas::Command::new("taskkill")
        .args(&["/F", "/IM", "OVR*", "/T"])
        .status()
        .ok();
}

fn ok_or_exit<T, E: std::fmt::Display>(res: Result<T, E>) {
    use std::process::exit;

    if let Err(e) = res {
        #[cfg(not(windows))]
        {
            use termion::color::*;
            println!("\n{}Error: {}{}", Fg(Red), e, Fg(Reset));
        }
        #[cfg(windows)]
        println!("{}", e);

        exit(1);
    }
}

fn main() {
    let mut args = Arguments::from_env();

    if args.contains(["-h", "--help"]) {
        println!("{}", HELP_STR);
    } else if let Ok(Some(subcommand)) = args.subcommand() {
        let is_release = args.contains("--release");

        if args.finish().is_ok() {
            match subcommand.as_str() {
                "build-server" => ok_or_exit(build_server(is_release, true)),
                "build-client" => ok_or_exit(build_client(is_release)),
                "publish" => ok_or_exit(build_publish()),
                "clean" => remove_build_dir(),
                "kill-oculus" => kill_oculus_processes(),
                _ => {
                    println!("\nUnrecognized subcommand.");
                    println!("{}", HELP_STR);
                    return;
                }
            }
        } else {
            println!("\nWrong arguments.");
            println!("{}", HELP_STR);
            return;
        }
    } else {
        println!("\nMissing subcommand.");
        println!("{}", HELP_STR);
        return;
    }

    println!("\nDone\n");
}
