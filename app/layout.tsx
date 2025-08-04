
'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from '@/components/ui/sonner';
import { usePathname } from 'next/navigation';
  import { useState, useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

  // export const metadata: Metadata = {
  //   title: 'Trainers',
  //   description:
  //     'Trainers aims to bring together experts, trainers, and learners under one umbrella to foster knowledge sharing, skill development, and career advancement across diverse sectors. We envision a future where Bangladeshi talent thrives through world-class training opportunities tailored to global standards.',
  // };

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

const pathname = usePathname();
const showPublicLayout = !pathname.startsWith('/admin') && !pathname.startsWith('/user');




    return (
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
       {showPublicLayout && <Header />}
{children}
{showPublicLayout && <Footer />}

            <Toaster
              position="top-right"
              toastOptions={{
                className:
                  'bg-white text-gray-900 border-green-500 dark:bg-gray-800 dark:text-white dark:border-green-400',
                style: {
                  borderWidth: '1px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                },
              }}
            />
          </ThemeProvider>
        </body>
      </html>
    );
  }