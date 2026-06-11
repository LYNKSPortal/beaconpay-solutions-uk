import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beaconpaysolutions.co.uk"),

  title: {
    default: "BEACONPAY Solutions — Coming Soon",
    template: "%s | BEACONPAY Solutions",
  },
  description:
    "BEACONPAY Solutions is redefining how businesses send, receive, and manage money globally. Fast payments, bank-grade security, and global reach across 150+ countries. Launching soon.",
  keywords: [
    "BEACONPAY",
    "Beaconpay Solutions",
    "payment solutions",
    "fintech",
    "online payments",
    "instant payments",
    "payment gateway",
    "global payments",
    "secure payments",
    "business payments",
    "financial technology",
    "money transfer",
    "UK fintech",
    "payment processing",
  ],
  authors: [{ name: "BEACONPAY Solutions", url: "https://www.beaconpaysolutions.co.uk" }],
  creator: "BEACONPAY Solutions",
  publisher: "BEACONPAY Solutions",
  category: "Finance & Payments",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.beaconpaysolutions.co.uk",
  },

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
    description:
      "Fast, secure, and built for scale. Accept and send payments across 150+ countries. The future of payments is almost here.",
    type: "website",
    url: "https://www.beaconpaysolutions.co.uk",
    siteName: "BEACONPAY Solutions",
    locale: "en_GB",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "BEACONPAY Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BEACONPAY Solutions — Coming Soon",
    description:
      "Fast, secure, and built for scale. Accept and send payments across 150+ countries. The future of payments is almost here.",
    images: ["/web-app-manifest-512x512.png"],
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
