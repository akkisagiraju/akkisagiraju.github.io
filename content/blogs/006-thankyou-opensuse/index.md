---
title: Thank you, openSUSE
date: 2023-04-05
---

I'm writing this blog post to show my appreciation for openSUSE.

Back in 2020 when I was building my PC, I was looking for a Linux distro to use for work and for occasional gaming. As a software developer and an enthusiast, I also wanted a rolling release distro to be on the bleeding edge. I narrowed my options to these three:
1. Arch Linux
2. Manjaro (based on Arch with simpler installation process)
3. openSUSE Tumbleweed

I must say I didn't want to go through the installation of Arch by myself and that was the only reason why Manjaro made it to my list. Browsing through reddit and a few forums, I noticed people who use openSUSE Tumbleweed sweared by it and claimed it was the most stable rolling release that was less prone to stuff breaking. I know that's a self contradictory statement but I understand now.

Over the past three years, I've been using openSUSE Tumbleweed and I am glad to say it ended my nasty habit of distro hopping. Here are the things I like about it the most:
- `zypper` - Tumbleweed's package manager is a pleasure to use
- Comes with Btrfs by default. Snapper, a tool for managing btrfs sanpshots saved me a lot of headache once when an Nvidia driver update broke Electron apps once. Rolling back to a previous snapshot is as simple as `snapper rollback`
- Rock solid OBS and openQA systems
- Never had any app or service crash on me
- First class support for KDE (my DE of choice)

However, it wasn't a complete smooth sailing in the beginning. The default software repo had (still has) only open source software but after adding [Packman](https://en.opensuse.org/Additional_package_repositories), I was able to install non-OSS like proprietory Nvidia drivers to use my RTX 3060 Ti to its full potential while gaming. A stricter firewall rules can also be offputting for some users. I had to modify a few rules just to setup KDE Connect and add an old printer I have. My other gripe is that some important software packages are named differently than in other popular distros. This makes finding the exact package I need a little difficult but not impossible.

But at the end of the day, Tumbleweed made my life easier by just letting me focus on what I do instead of fiddling with the OS. Thank you openSUSE for that.
