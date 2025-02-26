import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';

const interVariable = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sanity Figma sketch',
  description: 'Based on the Sanity.io website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interVariable.variable} antialiased font-[family-name:var(--font-inter)]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
