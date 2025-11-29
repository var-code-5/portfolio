import type { Metadata } from "next";
import { Space_Grotesk, Rethink_Sans } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ui/ClickSpark";
import Navbar from "@/components/Navbar";
import { ReactLenis } from 'lenis/react';
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Varshith | Portfolio",
  description: "The Variable you are looking for - Software Developer specializing in web development and creative solutions",
  keywords: ["portfolio", "developer", "software engineer", "web development", "React", "Next.js"],
  authors: [{ name: "Varshith" }],
  creator: "Varshith",
  publisher: "Varshith",
  metadataBase: new URL("https://varshith.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Varshith | Portfolio",
    description: "The Variable you are looking for - Software Developer specializing in web development and creative solutions",
    url: "https://varshith.tech",
    siteName: "Varshith's Portfolio",
    images: [
      {
        url: "/Yin_yang.svg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Varshith's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
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
    apple: "/favicon.ico",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="xJnOOg8goILGQy6J0qcK0MHPYz5SfJ6ze_Dm1FMduH4" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${rethinkSans.variable} antialiased flex flex-col items-center w-screen min-h-screen font-rethink-sans text-black-text`}
      >
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.4,
          }}
        >
          <ClickSpark
            sparkColor='#00000'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <Navbar />
            {children}
            <Footer />
          </ClickSpark>
        </ReactLenis>
      </body>
      <GoogleAnalytics gaId="G-KGW68BHSJD" />
    </html>
  );
}
