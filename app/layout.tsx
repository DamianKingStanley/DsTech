import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatwayWidget from "./components/FloatingChat";
import FloatingPhoneButton from "./components/FloatingPhoneCall";
import FloatingSocialIcons from "./components/FloatingSocialIcons";
import { ThemeProvider } from "./components/ThemeProvider";

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
  title: "Quortek Hub - Tech Solutions & Digital Transformation",
  description:
    "Building innovative solutions and onboarding businesses into the tech space with custom software, web development, and tech coaching services.",
  keywords: [
    "tech solutions",
    "web development",
    "app development",
    "software development",
    "tech coaching",
    "digital transformation",
    "graphic design",
    "branding",
  ],
  authors: [{ name: "Damian Okoro", url: "https://kingdamian.vercel.app/" }],
  creator: "Quortek Technologies",
  publisher: "Quortek Hub",
  openGraph: {
    title: "Quortek Hub - Tech Solutions & Digital Transformation",
    description:
      "Building innovative solutions and onboarding businesses into the tech space",
    url: "https://www.quortek.cloud",
    siteName: "Quortek Hub",
    images: [
      {
        url: "/images/logo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quortek Hub - Tech Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quortek Hub - Tech Solutions & Digital Transformation",
    description:
      "Building innovative solutions and onboarding businesses into the tech space",
    images: ["/images/logo/og-image.jpg"],
    creator: "@quortektech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <ChatwayWidget />
          <FloatingPhoneButton />
          <FloatingSocialIcons />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
