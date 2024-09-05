"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
 

  return (
    <html lang="fr">
      <body>
        <header>
          <nav>
           
          </nav>
        </header>
        <main>
        {children}
        </main>
 
        <footer id="contact" className='contact'>
        <h1>Mélodie Morin</h1>
        <br />
        <a href="mailto:melodiemorin@gmail.com">melodiemorin@gmail.com</a>
        <br />
      </footer>
      </body>
    </html>
  );
}
