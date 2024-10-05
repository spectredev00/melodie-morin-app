import "../globals.scss";
import { ReactNode } from "react";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/context"; // Importer le contexte de langue

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { language } = useLanguage(); 

  const seoContent = {
    en: {
      title: "Mélo Morin - Artist Dancer Quebec CA",
      description:
        "Welcome to Mélo Morin's website, professional dancer. Explore her portfolio and latest artistic creations.",
      keywords: "Mélo Morin, Mélodie Morin, dancer, photographer, portfolio, arts",
      ogTitle: "Mélo Morin - Artist Dancer",
      ogDescription: "Discover the creations and performances of Mélo Morin, a talented artist in the field of dance.",
    },
    fr: {
      title: "Mélo Morin - Artiste Danseuse Québec CA",
      description:
        "Bienvenue sur le site de Mélo Morin, danseuse professionnelle. Explorez son portfolio et ses dernières créations artistiques.",
      keywords: "Mélo Morin, Mélodie Morin, danseuse, portfolio, arts",
      ogTitle: "Mélo Morin - Artiste Danseuse",
      ogDescription: "Découvrez les créations et performances de Mélo Morin, une artiste talentueuse dans le domaine de la danse.",
    },
  };

  const t = seoContent[language as keyof typeof seoContent] || seoContent.en;

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content={t.ogTitle} />
        <meta property="og:description" content={t.ogDescription} />
        <meta property="og:image" content="/images/portrait-melodi.jpg" />
        <meta property="og:url" content="https://melomorin.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.ogTitle} />
        <meta name="twitter:description" content={t.ogDescription} />
        <meta name="twitter:image" content="/images/portrait-melodi.jpg" />

        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      <Header />
      <main className="container">
        <div className="container__wrapper">{children}</div>
      </main>
      <Footer />
    </>
  );
}
