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
    "若手と企業を実践活動でつなぎ、挑戦と信用が積み上がるプラットフォームをつくっています。",
  metadataBase: new URL("https://www.aoumi.art"),

  openGraph: {
    title: "青海株式会社",
    description:
      "若手と企業を実践活動でつなぎ、挑戦と信用が積み上がるプラットフォームをつくっています。",
    url: "https://www.aoumi.art",
    siteName: "青海株式会社",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        // TODO: og-aoumi.jpg を public/ に配置してください（推奨サイズ: 1200x630）
        url: "/og-aoumi.jpg",
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
      "若手と企業を実践活動でつなぎ、挑戦と信用が積み上がるプラットフォームをつくっています。",
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
