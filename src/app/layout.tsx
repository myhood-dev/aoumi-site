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
  title: "青海株式会社",
  description:
    "GAFAをリバースエンジニアリングし、人の挑戦と信用を可視化するライフスタイルプラットフォームMyHood",
  metadataBase: new URL("https://www.aoumi.art"), // 絶対URL組み立て用（推奨）

  openGraph: {
    title: "青海株式会社",
    description:
      "GAFAをリバースエンジニアリングし、人の挑戦と信用を可視化するライフスタイルプラットフォームMyHood",
    url: "https://www.aoumi.art",
    siteName: "青海株式会社",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-aoumi.jpg", // public/og-aoumi.jpg を置く
        width: 1200,
        height: 630,
        alt: "青海株式会社 Aoumi Inc.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "青海株式会社",
    description:
      "GAFAをリバースエンジニアリングし、人の挑戦と信用を可視化するライフスタイルプラットフォームMyHood",
    images: ["/og-aoumi.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
