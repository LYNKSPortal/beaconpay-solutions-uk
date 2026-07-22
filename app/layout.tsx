import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(business.website),

  title: {
    default: "Beaconpay Solutions | UK Payroll, PAYE, CIS & Contractor Services",
    template: "%s | Beaconpay Solutions",
  },
  description:
    "Beaconpay Solutions provides professional PAYE, CIS, umbrella, contractor and outsourced payroll services for businesses and recruitment agencies across the UK.",
  keywords: [
    "Beaconpay Solutions",
    "UK payroll",
    "PAYE payroll",
    "CIS payroll",
    "umbrella payroll",
    "contractor payroll",
    "recruitment agency payroll",
    "outsourced payroll",
    "HMRC compliance",
    "RTI submissions",
    "payslips",
    "National Insurance",
    "pension auto-enrolment",
    "payroll outsourcing",
    "payroll reporting",
  ],
  authors: [{ name: business.name, url: business.website }],
  creator: business.name,
  publisher: business.name,
  category: "Payroll Services",
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
    canonical: business.website,
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
    title: "Beaconpay Solutions | UK Payroll, PAYE, CIS & Contractor Services",
    description:
      "Professional PAYE, CIS, umbrella, contractor and outsourced payroll services for businesses and recruitment agencies across the UK.",
    type: "website",
    url: business.website,
    siteName: business.name,
    locale: "en_GB",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: business.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Beaconpay Solutions | UK Payroll, PAYE, CIS & Contractor Services",
    description:
      "Professional PAYE, CIS, umbrella, contractor and outsourced payroll services for businesses and recruitment agencies across the UK.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet/10 rounded-full blur-3xl" />
        </div>
        <Header />
        <main id="main-content" className="flex-1 relative">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
