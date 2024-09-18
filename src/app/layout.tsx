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
      rel: 'icon',
      url: '/icon.ico',
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
