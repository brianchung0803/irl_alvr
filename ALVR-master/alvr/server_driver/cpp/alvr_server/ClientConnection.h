#pragma once

#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <algorithm>
#include "threadtools.h"
#include "Logger.h"
#include "UdpSocket.h"
#include "Utils.h"
#include "Poller.h"
#include "packet_types.h"
#include "Settings.h"
#include "Statistics.h"
#include "MicPlayer.h"
#include "ChaperoneUpdater.h"
#include <math.h>
#include <iostream>
using namespace std;

extern "C" {
#include "reedsolomon/rs.h"
};

class angle
{
public:
	angle();
	~angle();
	void set_angle_now(double angle_now);
	void set_angle_past(double angle_past);
	void Quaternion_to_pitch(const float* quat, double& pitch)
	{
		// fout<<"================="<<endl;
		// double sinr = +2.0 * (quat[3] * quat[0] + quat[1] * quat[2]);
		// double cosr = +1.0 - 2.0 * (quat[0] * quat[0] + quat[1] * quat[1]);
		// // // yaw_pitch_roll[2] = atan2(sinr, cosr);
		// fout<<"roll: "<<atan2(sinr, cosr)<<endl;

		// pitch (y-axis rotation)
		double sinp = +2.0 * (quat[3] * quat[1] - quat[2] * quat[0]);
		if (fabs(sinp) >= 1)
			// yaw_pitch_roll[1] = copysign(M_PI / 2, sinp); // use 90 degrees if out of range
			pitch = copysign(M_PI / 2, sinp); // use 90 degrees if out of range
		else
			// yaw_pitch_roll[1] = asin(sinp);
			pitch = asin(sinp);
		// fout<<"pitch: "<<asin(sinp)<<endl;
		// // yaw (z-axis rotation)
		// double siny = +2.0 * (quat[3] * quat[2] + quat[0] * quat[1]);
		// double cosy = +1.0 - 2.0 * (quat[1] * quat[1] + quat[2] * quat[2]);
		// // yaw_pitch_roll[0] = atan2(siny, cosy);
		// fout<<"yaw: "<<atan2(siny, cosy)<<endl;
	}
	double get_fov_ratio();

private:
	fstream fout;
	double angle_now;
	double angle_past;
	double angle_d;
	double fov_ratio;
};

class ClientConnection : public CThread {
public:

	ClientConnection();
	~ClientConnection();
	void SetPoseUpdatedCallback(std::function<void()> callback);
	void SetStreamStartCallback(std::function<void()> callback);
	void SetPacketLossCallback(std::function<void()> callback);
	void SetShutdownCallback(std::function<void()> callback);

	bool Startup();
	void Run() override;
	void FECSend(uint8_t *buf, int len, uint64_t frameIndex, uint64_t videoFrameIndex);
	void SendVideo(uint8_t *buf, int len, uint64_t frameIndex);
	void SendAudio(uint8_t *buf, int len, uint64_t presentationTime);
	void SendHapticsFeedback(uint64_t startTime, float amplitude, float duration, float frequency, uint8_t hand);
	void ProcessRecv(char *buf, int len, sockaddr_in *addr);
	void Stop();
	bool HasValidTrackingInfo() const;
	void GetTrackingInfo(TrackingInfo &info);
	uint64_t clientToServerTime(uint64_t clientTime) const;
	uint64_t serverToClientTime(uint64_t serverTime) const;
	void Connect(const sockaddr_in *addr);
	void OnFecFailure();
	std::shared_ptr<Statistics> GetStatistics();
	bool IsStreaming();
	// double get_fov_ratio();

private:
	bool m_bExiting;
	std::shared_ptr<Poller> m_Poller;
	std::shared_ptr<UdpSocket> m_Socket;
	std::shared_ptr<Statistics> m_Statistics;
	std::shared_ptr<MicPlayer> m_MicPlayer;
	std::shared_ptr<ChaperoneUpdater> m_ChaperoneUpdater;
	std::shared_ptr<angle> m_angle;
	
	std::ofstream outfile;
	// double fov;
	// Maximum UDP payload
	static const int PACKET_SIZE = 1400;
	static const int64_t REQUEST_TIMEOUT = 5 * 1000 * 1000;
	static const int64_t CONNECTION_TIMEOUT = 5 * 1000 * 1000;
	static const int64_t STATISTICS_TIMEOUT_US = 1000 * 1000;

	uint32_t videoPacketCounter = 0;
	uint32_t soundPacketCounter = 0;

	std::function<void()> m_PoseUpdatedCallback;
	std::function<void()> m_StreamStartCallback;
	std::function<void()> m_PacketLossCallback;
	std::function<void()> m_ShutdownCallback;
	TrackingInfo m_TrackingInfo;

	uint64_t m_TimeDiff = 0;
	CRITICAL_SECTION m_CS;

	bool m_Streaming;

	TimeSync m_reportedStatistics;
	uint64_t m_lastFecFailure = 0;
	static const uint64_t CONTINUOUS_FEC_FAILURE = 60 * 1000 * 1000;
	static const int INITIAL_FEC_PERCENTAGE = 5;
	static const int MAX_FEC_PERCENTAGE = 10;
	int m_fecPercentage = INITIAL_FEC_PERCENTAGE;

	uint64_t mVideoFrameIndex = 1;

	uint64_t m_LastStatisticsUpdate;
	float quat[4];
};

