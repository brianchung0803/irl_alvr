#pragma once

#include <memory>
#include "d3drender.h"
#include "ClientConnection.h"
#include "NvEncoderD3D11.h"
#include "packet_types.h"
#include <math.h>
#include <iostream>

using namespace std;
class VideoEncoder
{
public:
	virtual void Initialize() = 0;
	virtual void Shutdown() = 0;

	virtual void Transmit(ID3D11Texture2D *pTexture, uint64_t presentationTime, uint64_t frameIndex, uint64_t frameIndex2, uint64_t clientTime, bool insertIDR) = 0;

	virtual void Reconfigure(int refreshRate, int renderWidth, int renderHeight, int bitrateInMBits) = 0;
	virtual double Fov_ratio() = 0;
};


class angle_diff
{
public:
	angle_diff();
	~angle_diff();
	void set_angle_now(double angle);
	void set_angle_past(double angle);
	void Quaternion_to_pitch(const float* quat, float* yaw_pitch_roll)
	{
		// fout<<"================="<<endl;
		double sinr = +2.0 * (quat[3] * quat[0] + quat[1] * quat[2]);
		double cosr = +1.0 - 2.0 * (quat[0] * quat[0] + quat[1] * quat[1]);
		yaw_pitch_roll[2] = atan2(sinr, cosr);
		// fout<<"roll: "<<atan2(sinr, cosr)<<endl;

		// pitch (y-axis rotation)
		double sinp = +2.0 * (quat[3] * quat[1] - quat[2] * quat[0]);
		if (fabs(sinp) >= 1)
			yaw_pitch_roll[1] = copysign(M_PI / 2, sinp); // use 90 degrees if out of range
			// pitch = copysign(M_PI / 2, sinp); // use 90 degrees if out of range
		else
			yaw_pitch_roll[1] = asin(sinp);
			// pitch = asin(sinp);
		// fout<<"pitch: "<<pitch<<endl;
		// yaw (z-axis rotation)
		double siny = +2.0 * (quat[3] * quat[2] + quat[0] * quat[1]);
		double cosy = +1.0 - 2.0 * (quat[1] * quat[1] + quat[2] * quat[2]);
		yaw_pitch_roll[0] = atan2(siny, cosy);
		// fout<<"yaw: "<<atan2(siny, cosy)<<endl;
	}
	void get_fov_ration(double& fov);

	double get_diff()
	{
		angle_d = angle_now - angle_past;
		return angle_d;
	}


private:
	fstream fout;
	double angle_now=0.0f;
	double angle_past=0.0f;
	double angle_d=0.0f;
	double fov_ratio;
};