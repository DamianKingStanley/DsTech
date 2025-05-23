import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatwayWidget from "./components/FloatingChat";
import FloatingPhoneButton from "./components/FloatingPhoneCall";
import FloatingSocialIcons from "./components/FloatingSocialIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quortek Hub",
  description: "Building solutions and onboarding you into the tech space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <ChatwayWidget />
        <FloatingPhoneButton />
        <FloatingSocialIcons />
        {children}
        <Footer />
      </body>
    </html>
  );
}
