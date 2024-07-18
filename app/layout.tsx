"use client";

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import './globals.css';

export default function Layout({ children }) {
  const { t } = useTranslation('common');



  return (
    <div>
      <Head>
        <meta name="description" content="Hip-hop dancer's official website" />
        <meta name="keywords" content="Hip-hop, Dance, Performer" />
        <meta name="author" content="Hip-hop Dancer" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <header>
        <nav>
          <ul>
            
          
          </ul>
        </nav>
      </header>
      <html>
      <body>
      {children}
      </body>
      </html>
   
   
    </div>
  );
}
