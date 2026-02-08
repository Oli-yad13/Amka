import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AMKA Systems | Digital Healthcare for Ethiopia",
    template: "%s | AMKA Systems",
  },
  description: "AMKA Systems provides Smart HMIS, Interoperable MRS, and medical campaign solutions for healthcare facilities across Ethiopia.",
  keywords: ["HMIS", "MRS", "OpenMRS", "Ethiopia", "healthcare", "digital health", "Addis Ababa", "medical records", "PSI Ethiopia"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AMKA Systems",
    title: "AMKA Systems | Digital Healthcare for Ethiopia",
    description: "Smart HMIS, Interoperable MRS, and medical campaign solutions for Ethiopian healthcare facilities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMKA Systems | Digital Healthcare for Ethiopia",
    description: "Smart HMIS, Interoperable MRS, and medical campaign solutions for Ethiopian healthcare facilities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
