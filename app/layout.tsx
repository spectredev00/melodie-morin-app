"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import Head from "next/head";
import "./globals.css";

import Footer from "@/components/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const isFrench = pathname.startsWith("/fr");


  const otherLocale = isFrench ? "en" : "fr";

  const newUrl = `/${otherLocale}${pathname.replace(/^\/(fr|en)/, "")}`;

  return (
    <html lang={isFrench ? "fr" : "en"}>
      <Head>
        <title>Mélo Morin</title>
        <meta
          name="description"
          content="Site de Mélo Morin - Danseuse et Photographe"
        />
      </Head>
      <body>
        <header id="header" className="header">
          <nav className="navbar">
            <ul>
              <li className="lang">
                <a href={newUrl} title="Langue">{isFrench ? "EN" : "FR"}</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
