import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Wedding Media',
  description:
    'Upload your media from the wedding so that it can be accessed easily.',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
