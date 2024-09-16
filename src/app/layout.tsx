import type { Metadata } from "next";
import '../styles/globals.css'
// import WebNav from "@/components/Navbar/WebNav";
import { Suspense } from "react";
import Footer from "@/components/Navbar/Footer";
import Loading from "@/components/Loading/Loading";

export const metadata: Metadata = {
  title: "Serumah Kost Sendiri",
  description: "Hunian kost eksklusif dengan fasilitas yang lengkap untuk menunjang kehidupanmu serta memiliki beragam tipe kamar sesuai kebutuhan kamu!",
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#ECEDEB]">
        {/* <WebNav /> */}
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
