import type { Metadata } from "next";
import { Geist, Ubuntu } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Button } from "../components/Button";
import Logo from '../images/logo.svg';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistUbuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistUbuntu.className} antialiased overflow-x-hidden`}
      >
        <header className="flex justify-around flex-row bg-bg-header p-5">
          <Image src={Logo} alt="logo blogger" className="ml-0" />
          <nav className="flex flex-row gap-4 text-white cursor-pointer">
            <li className="list-none">Product</li>
            <li className="list-none">Company</li>
            <li className="list-none">Connect</li>
          </nav>
          <div className="flex flex-row gap-4">
          <Button title="Login" buttonStyle="transparent" />
          <Button title="Sign Up" buttonStyle="color" />
          </div>
        </header>
        {children}
        <footer className="bg-bg-footer text-[#666673] flex flex-row justify-around p-4 rounded-tr-[5rem]">
        <div>
          <Image src={Logo} alt="logo blogger" className="align-middle" />
        </div>
        <div>
          <h4 className="mb-2 mt-2 font-bold text-white">Product</h4>
          <nav>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">Overview</li>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">Pricing</li>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">Marketplace</li>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">Features</li>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">Integrations</li>
          </nav>
        </div>
        <div>
        <h4 className="mb-2 mt-2 font-bold text-white">Company</h4>
          <nav>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">About</li>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">Team</li>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">Blog</li>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">Careers</li>
          </nav>
        </div>
        <div>
        <h4 className="mb-2 mt-2 font-bold text-white">Connect</h4>
          <nav>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">Contact</li>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">Newsletter</li>
            <li className="list-none text-sm mb-2 font-normal cursor-pointer">Linkedin</li>
          </nav>
        </div>
        </footer>
      </body>
    </html>
  );
}
