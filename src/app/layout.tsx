import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import '../styles/globals.css'
import WebNav from "@/components/Navbar/WebNav";
import { Suspense } from "react";
import Footer from "@/components/Navbar/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
})

export const metadata: Metadata = {
  title: "JawaraTech",
  description: "Generated your responsive and SEO friendly personal landing page with us!",
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
      <body className={urbanist.className}>
        <WebNav />
        <Suspense fallback={"Tunggu Sebentar..."}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
