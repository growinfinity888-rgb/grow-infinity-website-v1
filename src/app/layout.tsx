import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/lenis-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Grow Infinity | Corporate Setup & Structuring in UAE",
  description: "Award-winning business setup, corporate tax alignments, and institutional banking solutions for elite founders expanding to the Middle East.",
  keywords: ["Dubai Business Setup", "Company Formation UAE", "Corporate Tax", "Mainland", "Free Zone", "Golden Visa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Grow Infinity Corporate Services",
              "image": "https://growinfinity.ae/assets/images/logo.png",
              "@id": "https://growinfinity.ae",
              "url": "https://growinfinity.ae",
              "telephone": "+971 4 500 0000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Floor 38, Media One Tower",
                "addressLocality": "Dubai Media City",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-800 flex flex-col antialiased selection:bg-[#0D3B66] selection:text-white overflow-x-hidden">
        <LenisProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
