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
        "With a strong desire to break into the dance world, Mélodie devotes many hours every day to perfecting her skills. Her discipline and commitment are admirable, and her coaches are quick to praise her talent and rapid progress.",
      about1:
        "For Mélodie, dancing is not just a hobby, but a dream that she wants to turn into a career. She aspires to be part of a touring company, a show in the theater, on television or even half-time at the Sup",
      about2:
        "Outside of dance, Mélodie is also a keen student, balancing her studies with her passion. Those around her, including family and friends, support her unconditionally in her quest. With her talent, determination and love of dance, she has big goals.",
    },
    fr: {
      title: "Bienvenue sur le site de Mélo Élodie Morin Morin",
      description:
        "Avec une grande volonté de percer dans le milieu de la danse, Mélodie consacre de nombreuses heures chaque jour, pour se perfectionner. Sa discipline et son engagement sont admirables et ses coachs n’hésitent pas à saluer son talent et sa progression rapide.",
      about1:
        "APour Mélodie, la danse n’est pas seulement un hobby mais bien un rêve qu’elle souhaite transformer en carrière. Elle aspire à intégrer une troupe de tournée, un spectacle au théâtre, à la télévision ou encore la mi-temps au Superbowl.",
      about2:
        "En dehors de la danse, Mélodie est également une élève assidue, équilibrant ses études et sa passion. Son entourage, incluant sa famille et ses amis, la soutiennent inconditionnellement dans sa quête. Avec son talent, sa détermination et son amour pour la danse, elle a de grands objectifs.",
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
      <Gallery photos={photos} />
      <section id="about" className="about">
      <p className="about__paragraph animate__animated animate__fadeInUp animate__delay-1s">
              {t.description}
            </p>

            <p className="about__paragraph animate__animated animate__fadeInUp animate__delay-1s">
              {t.about1}
            </p>
            <p className="about__paragraph animate__animated animate__fadeInUp animate__delay-1s">
              {t.about2}
            </p>
   
      </section>

      <section
  className="melodie-studio fadeUp"
  style={{ backgroundImage: "url('/images/studio.jpg')" }}
>
</section>


    </>
  );
}
