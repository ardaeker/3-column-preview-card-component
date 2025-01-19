import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Big_Shoulders_Display, Lexend_Deca } from 'next/font/google';

const bigShoulderDisplay = Big_Shoulders_Display({
  display: 'swap',
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-big-shoulders-display',
});

const lexendDeca = Lexend_Deca({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lexend-deca',
});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2f2f2',
};

export const metadata: Metadata = {
  title: 'Frontend Mentor - 3 Column preview card component',
  description:
    'This website is a solution for the 3 Column preview card component challenge on Frontend Mentor. It is built with Next.js and Tailwind CSS. Coded by Arda Eker.',
  authors: {
    name: 'Arda Eker',
    url: 'https://github.com/ardaeker',
  },
  keywords: [
    'Frontend Mentor',
    '3 Column preview card component',
    '3 Column preview card component solution',
    '3 Column preview card component challenge',
    '3 Column preview card component challenge solution',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Arda Eker',
  ],
  metadataBase: new URL(
    'https://3-column-preview-card-component-rouge-five.vercel.app/',
  ),
  openGraph: {
    title: 'Frontend Mentor - 3 Column preview card component',
    description:
      'This website is a solution to the 3 Column preview card component challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
    siteName: 'Frontend Mentor - 3 Column preview card component',
    images: [
      {
        url: 'opengraph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://3-column-preview-card-component-rouge-five.vercel.app',
  },
  icons: {
    icon: '/favicon.png',
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
        className={`${bigShoulderDisplay.variable} ${lexendDeca.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
