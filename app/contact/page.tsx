"use client"; 

import Head from "next/head";
import SocialLinks from "@/components/socialLinks";
import Image from "next/image";

import Layout from "@/app/layout";


import { useLanguage } from "../context";
const Contact = () => {
  const { language } = useLanguage(); 

  
  const content = {
    en: {
      title: "Contact Mélo Morin",
      description: "To contact me, send me an email at melomorin3022@hotmail.com",
      seoTitle: "Contact Mélo Morin",
      seoDescription: "To contact me, send me an email at melomorin3022@hotmail.com",
      emailLabel: "Send me an email:",
    },
    fr: {
      title: "Contactez Mélo Morin",
      description: "Pour me contacter, envoyez-moi un email à melomorin3022@hotmail.com",
      seoTitle: "Contactez Mélo Morin",
      seoDescription: "Pour me contacter, envoyez-moi un email à melomorin3022@hotmail.com",
      emailLabel: "Pour me contacter, envoyez-moi un email :",
    },
  };

  // Déterminer le contenu à afficher selon la langue (par défaut en anglais)
  const t = content[language as keyof typeof content] || content.en;

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>{t.seoTitle}</title>
        <meta name="description" content={t.seoDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={t.seoTitle} />
        <meta property="og:description" content={t.seoDescription} />
        <meta property="og:image" content="/images/portrait-melodi.jpg" />
        <meta property="og:url" content="https://melomorin.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content={t.seoTitle} />
        <meta name="twitter:description" content={t.seoDescription} />
        <meta name="twitter:image" content="/images/contact-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="contact">
        <div className="contact__content">
          <Image
            src="/images/portrait-melodi.jpg"
            alt="Mélodie Morin - Mélo Morin"
            width={300}
            height={300}
            objectFit="contain"
            className="contact__img"
          />
          <p className="contact__text">{t.emailLabel}</p>
          <a href="mailto:melomorin3022@hotmail.com" className="contact__email">
            melomorin3022@hotmail.com
          </a>

          <SocialLinks />
        </div>
      </section>
    </>
  );
};

export default Contact;
