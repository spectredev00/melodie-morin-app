"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation('common');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeLanguage = (lang: string) => {
    const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
    currentParams.set('lng', lang);
    const newPath = `${pathname}?${currentParams.toString()}`;
    window.location.href = newPath;
  };

  return (
    <html lang="fr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="description" content="Hip-hop dancer's official website" />
        <meta name="keywords" content="Hip-hop, Dance, Performer" />
        <meta name="author" content="Hip-hop Dancer" />
        <title>Hip-hop Dancer</title>
      </Head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <button className='lang' onClick={() => changeLanguage('fr')}>FR</button>
                <button className='lang' onClick={() => changeLanguage('en')}>EN</button>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
