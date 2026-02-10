import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "ClearCards – Invitation cards made free with brand sponsorships",
  description: "ClearCards helps couples get physical wedding invitation cards free, while brands reach real homes through meaningful celebrations.",
  keywords: ["wedding invitation cards", "free wedding cards", "sponsored invitation cards", "wedding card printing", "brand sponsored invitations", "ClearCards"],
  authors: [{ name: "ClearCards" }],
  applicationName: "ClearCards",
  appleWebApp: {
    capable: true,
    title: "ClearCards",
    statusBarStyle: "default",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://clearcards.app",
  },
  openGraph: {
    type: "website",
    title: "ClearCards – Invitation cards made free with brand sponsorships",
    description: "ClearCards helps couples get physical wedding invitation cards free, while brands reach real homes through meaningful celebrations.",
    url: "https://clearcards.app",
    siteName: "ClearCards",
    locale: "en_IN",
    images: [
      {
        url: "https://clearcards.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClearCards - Free wedding invitation cards powered by brand sponsorships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearCards – Invitation cards made free with brand sponsorships",
    description: "Get physical invitation cards free with ClearCards. Brands connect with real households during celebrations.",
    images: ["https://clearcards.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
