#include "VideoEncoder.h"

angle_diff::angle_diff()
{
    fout.open("C:\\Users\\User\\Desktop\\angle.txt",ios::out);
}
angle_diff::~angle_diff()
{
    fout.close();
}

void angle_diff::set_angle_now(double angle)
{
	angle_now = angle;
}

void angle_diff::set_angle_past(double angle)
{
	angle_past = angle;
}

void angle_diff::get_fov_ration(double& fov)
{
	angle_d = angle_now -angle_past;
	fov = 1 - 0.3*(angle_d);
}