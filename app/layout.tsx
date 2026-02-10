import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "ClearCards - Invitation Cards Made Free, Powered by Trusted Brands",
  description: "Get your physical wedding invitation cards at zero cost. ClearCards helps couples celebrate with premium quality cards, made possible through respectful brand sponsorships.",
  keywords: ["wedding cards", "invitation cards", "free wedding cards", "India wedding invitations", "brand sponsorship"],
  authors: [{ name: "ClearCards" }],
  openGraph: {
    title: "ClearCards - Invitation Cards Made Free",
    description: "Premium physical wedding invitation cards at zero cost, powered by trusted brand sponsorships.",
    url: "https://clearcards.app",
    siteName: "ClearCards",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearCards - Invitation Cards Made Free",
    description: "Premium physical wedding invitation cards at zero cost, powered by trusted brand sponsorships.",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
