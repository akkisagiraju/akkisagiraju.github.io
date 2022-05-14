---
title: Breathing new life into my four year old phone
date: 2022-05-14
---

Earlier this year, I felt I needed to upgrade my phone (OnePlus 6) mainly due to its degraded battery and the performance hit that caused. I bought it in 2018 and it had served me well in all those years.

I started looking for options. My main requirement was clean software experience. That eliminated a lot of choices in the Android world and iOS was my last option. But I almost pulled the trigger on an iPhone 13 before I realized my current phone was still fast enough to do almost everything I need it for, which are:

1. Web browsing
2. Texting/calling a limited number of people
3. Checking email and calendar
4. Tracking my expenses
5. Listening to music on Spotify

I do not need the latest and greatest hardware with an ultra fast processor and shiny new high refresh rate display for my use cases.

I wanted to keep using the same phone. So, I got its battery replaced at an authorized service centre. It costed me INR 1600 ($20) and greatly improved its battery life. I also decided to install a custom ROM for leaner Android experience because OxygenOS is not the same anymore since OxygenOS 11 and OnePlus had already ended software support for OnePlus 6 which means it would no longer receive security updates.

LineageOS was my obvious choice because I was a CyanogenMod user back in the day and it's usually the most stable of all the after market Android ROMs.

![screenshots](./screenshots.png)

The installation process wasn't as simple as I thought it would be. But it was not hard either. I had to unlock the bootloader, install a custom recovery (I went with TWRP), install the latest [LineageOS 19 build](https://download.lineageos.org/enchilada), a [bare minimum Gapps package](https://sourceforge.net/projects/nikgapps/files/Releases/NikGapps-SL/01-May-2022/) for Android 12L, and finally [Magisk](https://github.com/topjohnwu/Magisk) to pass SafetyNet test and to make my banking apps work by hiding root access.

That's it. My phone feels and functions as fast as the day I bought it and I do not have to think about buying a new phone anytime soon.
