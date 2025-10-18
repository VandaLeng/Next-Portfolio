import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vanda Leng - Software Developer Portfolio',
  description: 'Portfolio of Vanda Leng, a passionate software developer specializing in full-stack web development with React, Next.js, and modern technologies.',
  keywords: ['Vanda Leng', 'Software Developer', 'Web Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Vanda Leng' }],
  openGraph: {
    title: 'Vanda Leng - Software Developer Portfolio',
    description: 'A passionate software developer building modern web applications',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}