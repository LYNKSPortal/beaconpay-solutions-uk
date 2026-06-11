import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beaconpaysolutions.co.uk"),
  title: "BEACONPAY Solutions — Coming Soon",
  description:
    "BEACONPAY Solutions is redefining how businesses send, receive, and manage money globally. Launching soon.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "BEACONPAY Solutions — Coming Soon",
    description: "Fast, secure, and built for scale. The future of payments is almost here.",
    type: "website",
    url: "https://www.beaconpaysolutions.co.uk",
    siteName: "BEACONPAY Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "BEACONPAY Solutions — Coming Soon",
    description: "Fast, secure, and built for scale. The future of payments is almost here.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
