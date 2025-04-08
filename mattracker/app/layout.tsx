import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/app/styles/global/nfcbutton.css'
import { Navbar } from '@/app/components/navbar'
import { ActionsProvider } from "./context/scanactions";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mattracker",
  description: "Developed by David Ramirez Leon",
};

export default function RootLayout({
  children, modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ActionsProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        {modal}
      </body>
    </html>
    </ActionsProvider>
  );
}
