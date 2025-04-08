---
layout: project
title:  "Wireless Human Sensing using WiFi and mmWave"
description:
date: "2023-12-09 21:02:52"
image: 
---
RF waves scattered off the human body can reveal a lot about motion—a concept that forms the basis of wireless human sensing. Through this project, I explored how motion sensing works with both WiFi and mmWave, and gained hands-on experience comparing their capabilities.

<img src="https://github.com/Kapi2910/kapi2910.github.io/blob/master/assets/img/spectrogram/exp_setup.JPG?raw=true">

## WiFi Sensing
For the WiFi CSI experiment, two laptops equipped with IWL5300 were used. 1 omnidirectional antenna was set as the transmitter with transmits WiFi packets on channel 64 with 5.32GHz carrier frequency. There are 3 receiving antennas connected to the laptop. The receiver records CSI on 30 subcarriers. Overall, the data had 90 streams which was denoised using Principal Component Analysis[^2]. The first 10 principal components contained majority of the information. Hence, these were used to generate 10 spectrograms, using time windows of T_win = 0.4s , T_s = 4ms. They were then averaged to obtain the final spectrogram.

<img src="https://github.com/Kapi2910/kapi2910.github.io/blob/master/assets/img/spectrogram/Nov19_Spectrogram_APK_wifi.png?raw=true">


## mmWave Sensing
The mmWave measeurements were conducted using a Texas Instruments (TI) mmWave radar board, namely AWR2243BOOST. This board swept a frequency range of 76-81 GHz with a chirp time of 67 µs. The measured data 5D which made the data size quite larger than Wifi measurements. These are the 5 dimensions:

 `(Frame Index, Chirp Index, Tx Index, Rx Index, ADC Index)`

For processing this data I referred to the notes provided by TI[^1]. The advantage with a FMCW radar is that we get the range and velocity together at once. This enables one to create a 2D spectrum that shows the range and velocity at once. Since this 2D spectrum is produced for each time frame, I created video of the object's motion.

<video controls src="https://github.com/Kapi2910/kapi2910.github.io/raw/refs/heads/master/assets/img/spectrogram/RangeDoppler_APK.mp4" title="mmWave Spectrogram"></video>



## Comparison between Wifi & mmWave Radar 
From these experiments, I have tried to create a comparison table between WiFi and mmWave radar. 
| Parameter             | WiFi           | mmWave Radar    |
| --------------------- | -------------- | --------------- |
| Operating Frequencies | 2.4 GHz, 5 GHz | 60 GHz & 77 GHz |
| Bandwidth             | 80 MHz         | 5 GHz           |
| Range Resolution      | 1.875 m        | 3 cm            |
| Velocity Resolution   | 0.071 m/s      | 0.163 m/s       |
| Transmit Power        | 20 dBm         | 1 dBW           |
| Data Rate             | 30 Mb for 40 s | 500 Mb for 40 s |


---

### References
[^1]: Sandeep Rao. Introduction to mmwave sensing: Fmcw radars. Texas Instruments (TI) mmWave Training Series, pages 1–11, 2017.
[^2]: Wei Wang, Alex X. Liu, and Muhammad Shahzad. Gait recognition using wifi signals. In Proceedings of the 2016 ACM International Joint Conference on Pervasive and Ubiquitous Computing, pages 363–373, Heidelberg Germany, September 2016. ACM.