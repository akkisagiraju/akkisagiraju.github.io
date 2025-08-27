import React from 'react';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Uses = () => {
  return (
    <Layout>
      <Seo title="Uses" />
      <Bio />
      <div className="my-8">
        <h1 className="text-2xl font-bold dark:text-gray-100 mt-4 mb-4 lg:text-3xl">Uses</h1>
        <p className="mb-4">
          This page serves as a document for people who want to know what software or gear I am using.
        </p>

        <h2 className="text-xl font-bold mb-2">Hardware</h2>

        <h3 className="text-lg font-bold mb-2">Personal machine</h3>
        <ul className="list-disc list-inside mb-4">
          <li>CPU: AMD Ryzen 5 3600</li>
          <li>Motherboard: MSI B450 Tomahawk Max</li>
          <li>RAM: Corsair Vengenace CL16 3200Mhz (2 x 8GB)</li>
          <li>GPU: Nvidia RTX 3060 Ti Founder's Edition</li>
          <li>Storage: WD SN550 NVMe M.2 SSD - 500GB, Crucial CX500 SSD - 500GB, Samsung 870 EVO SSD - 2TB</li>
        </ul>

        <h3 className="text-lg font-bold mb-2">Work machine</h3>
        <p className="mb-4">Macbook Pro M4 Pro (2024)</p>

        <h3 className="text-lg font-bold mb-2">Desktop monitors</h3>
        <ol className="list-decimal list-inside mb-4">
          <li>LG 32GK650F 32 inch 1440p 144Hz VA monitor</li>
        </ol>

        <h3 className="text-lg font-bold mb-2">Mobile devices</h3>
        <ul className="list-disc list-inside mb-4">
          <li>iPhone 15</li>
          <li>Kindle Paperwhite (10th gen)</li>
        </ul>

        <h3 className="text-lg font-bold mb-2">Gaming setup</h3>
        <ul className="list-disc list-inside mb-4">
          <li>PC</li>
          <li>Xbox Series X</li>
        </ul>

        <h3 className="text-lg font-bold mb-2">Audio</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Edifier R1280DB bookshelf speakers/monitors</li>
          <li>Sony WH-1000XM4</li>
          <li>AirPods 4 ANC</li>
          <li>AKG K361 studio monitors</li>
          <li>Fiio M3K Audio Player/DAC</li>
        </ul>

        <h3 className="text-lg font-bold mb-2">Accessories</h3>
        <ul className="list-disc list-inside mb-4">
          <li>GoPro Hero 10</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">Software</h2>

        <h3 className="text-lg font-bold mb-2">OS</h3>
        <ul className="list-disc list-inside mb-4">
          <li>openSUSE Tumbleweed (personal)</li>
          <li>Windows 11 (gaming)</li>
          <li>macOS Sequoia (work)</li>
        </ul>

        <h3 className="text-lg font-bold mb-2">Applications</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Web browser: Firefox</li>
          <li>Text editor: Neovim/VSCodium</li>
          <li>Shell: ZSH (oh-my-zsh)</li>
          <li>Music: Apple Music</li>
          <li>Notes/Knowledge Base/Day Planner: Obsidian</li>
          <li>Email: ProtonMail</li>
          <li>VPN: ProtonVPN</li>
          <li>Password Manager: Bitwarden</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Uses;
