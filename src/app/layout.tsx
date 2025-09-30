import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPAI Bangkalan - Ikatan Penyuluh Agama Islam",
  description: "Ikatan Penyuluh Agama Islam Kabupaten Bangkalan - Mewujudkan Penyuluh Agama Islam yang Profesional, Berintegritas, dan Berakhlak Mulia",
  keywords: ["IPAI", "Bangkalan", "Penyuluh Agama Islam", "Islamic religious instructors", "Bangkalan", "keagamaan"],
  authors: [{ name: "IPAI Bangkalan" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a472a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}