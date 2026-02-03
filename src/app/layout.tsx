import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Profissional | Computer Scientist & AI Specialist',
  description: 'Portfolio profissional de Cientista da Computação especializado em Inteligência Artificial, Ciência de Dados e Visão Computacional',
  keywords: 'Computer Science, AI, Data Science, Computer Vision, Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
