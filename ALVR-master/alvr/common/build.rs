use std::{fs, path::Path};

fn get_version(dir_name: &str) -> String {
    let cargo_path = Path::new("..").join(dir_name).join("Cargo.toml");
    println!("cargo:rerun-if-changed={}", cargo_path.to_string_lossy());

    let cargo_data = toml::from_slice::<toml::Value>(&fs::read(cargo_path).unwrap()).unwrap();

    cargo_data["package"]["version"].as_str().unwrap().into()
}

pub fn server_version() -> String {
    get_version("server_driver")
}

// pub fn client_version() -> String {
//     get_version("client_hmd")
// }

fn main() {
    println!("cargo:rustc-env=SERVER_VERSION={}", server_version());
    // println!("cargo:rustc-env=CLIENT_VERSION={}", client_version());
}
