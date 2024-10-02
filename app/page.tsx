"use client"; // Assurez-vous que ce composant est côté client

import { useEffect, useState } from "react";
import "animate.css";
import Head from "next/head";
import { useLanguage } from "./context";
import Layout from "./layout";
import Hero from "@/components/hero";
import VideoSection from "@/components/videoSection";
import AboutSection from "@/components/aboutSection";
import Prix from "@/components/prix";
import Gallery from "@/components/gallery";

export default function Home() {
  const { language } = useLanguage(); // Utiliser le contexte pour récupérer la langue
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  // Contenu traduit directement dans le composant
  const translations = {
    en: {
      title: "Welcome to Mélo Morin's Site",
      description:
        "Mélo Morin is a professional dancer and performer. Discover her journey and contact her for collaboration.",
      about1:
        "With great determination to break into the dance industry, Mélodie devotes many hours each day to perfect her craft.",
      about2:
        "Outside of dancing, Mélodie is also a diligent student, balancing her studies and passion. Her dream is to become a professional dancer, share her talent on big stages, and travel the world.",
    },
    fr: {
      title: "Bienvenue sur le site de Mélo Morin",
      description:
        "Mélo Morin est une danseuse professionnelle et performeuse. Découvrez son parcours et contactez-la pour une collaboration.",
      about1:
        "Avec une grande volonté de percer dans le milieu de la danse, Mélodie consacre de nombreuses heures chaque jour pour se perfectionner.",
      about2:
        "En dehors de la danse, Mélodie est également une élève assidue, équilibrant ses études et sa passion. Son rêve est de devenir danseuse professionnelle, partager son talent sur de grandes scènes et voyager à travers le monde.",
    },
  };

  // Choisir la traduction basée sur la langue active
  const t = translations[language as keyof typeof translations] || translations.en;

  useEffect(() => {
    fetch("/medias.json")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
        setVideos(data.videos);
      });
  }, []);

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ton-site.com" />
      </Head>

      <Hero />
      <VideoSection />
      <AboutSection />
      <Prix />

      <section id="about" className="about">
        <div className="about__container">
          <div className="about__illustration"></div>
          <div className="about__second">
            <p className="about__paragraph animate__animated animate__fadeInUp animate__delay-1s">
              {t.about1}
            </p>
            <p className="about__paragraph animate__animated animate__fadeInUp animate__delay-1s">
              {t.about2}
            </p>
          </div>
        </div>
      </section>

      <Gallery photos={photos} />
    </>
  );
}
