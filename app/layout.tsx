"use client";

import "./globals.scss";
import { ReactNode, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/app/context";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer le fichier CSS de AOS

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durée des animations
      once: false, // Animation ne se produit qu'une fois
    });
  }, []);

  return (
    <LanguageProvider>
      <html lang="en">
        <Head>
          <title>Mélo Morin - Danseuse et Photographe</title>
          <meta
            name="description"
            content="Bienvenue sur le site de Mélo Morin, danseuse et photographe professionnelle. Explorez son portfolio et ses dernières créations artistiques."
          />
          <meta
            name="keywords"
            content="Mélo Morin, Mélodie Morin, danseuse, photographe, portfolio, arts"
          />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:title" content="Mélo Morin - Danseuse et Photographe" />
          <meta
            property="og:description"
            content="Découvrez les créations et performances de Mélo Morin, une artiste talentueuse dans le domaine de la danse et de la photographie."
          />
          <meta property="og:image" content="/images/portrait-melodi.jpg" />
          <meta property="og:url" content="https://melomorin.com" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mélo Morin - Danseuse et Photographe" />
          <meta
            name="twitter:description"
            content="Découvrez les créations et performances de Mélo Morin, une artiste talentueuse dans le domaine de la danse et de la photographie."
          />
          <meta name="twitter:image" content="/images/portrait-melodi.jpg" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Header />
          <main className="container">
            <div className="container__wrapper">{children}</div>
          </main>
          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}
