

import { useEffect, useState } from "react";
import "animate.css";
import Head from "next/head";
import { useLanguage } from "@/context";
import Hero from "@/components/hero";
import VideoSection from "@/components/videoSection";
import AboutSection from "@/components/aboutSection";
import ImageSlider from "@/components/swiper";
import Prix from "@/components/prix";
import Gallery from "@/components/gallery";
import Presences from "@/components/presences";

import Image from "next/image";
import Layout from "@/components/layout";

export default function Home() {
  const { language } = useLanguage(); 
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  const localPhotos = [
    {
      img: "https://res.cloudinary.com/djluqpaas/image/upload/v1727898792/melodie/n8k0uffcisfzmiqa4xzj.jpg",
      alt: "Mélo Morin - Mélodie Morin Danseuse",
    },
    {
      img: "https://res.cloudinary.com/djluqpaas/image/upload/v1727898791/melodie/cv4y4lvyb49z1yen6pap.jpg",
      alt: "Mélo Morin - Mélodie Morin Danseuse",
    },
    {
      img: "https://res.cloudinary.com/djluqpaas/image/upload/v1727898792/melodie/ghqoszn7jk6738fjhopv.jpg",
      alt: "Mélo Morin - Mélodie Morin Danseuse",
    },
    {
      img: "https://res.cloudinary.com/djluqpaas/image/upload/v1727898790/melodie/c9p0xikwtnmrkhzbd0du.jpg",
      alt: "Mélo Morin - Mélodie Morin Danseuse",
    },
    {
      img: "https://res.cloudinary.com/djluqpaas/image/upload/v1727898792/melodie/xuekhs05geuacfteqkc8.jpg",
      alt: "Mélo Morin - Mélodie Morin Danseuse",
    },
  ];

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

  const t =
    translations[language as keyof typeof translations] || translations.en;

  useEffect(() => {
    fetch("/medias.json")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
        setVideos(data.videos);
      });
  }, []);

  return (
    <Layout>
      <Hero />
      <VideoSection />
      <AboutSection />
      <ImageSlider photos={localPhotos} />
      <Prix />
      <section id="video" className={`video-section`}>
        <div className="video-section__preview">
          <Image
            src="/images/prix.jpg"
            alt="Mélodie et Stéphane Morin en competition"
            title="Mélodie et Stéphane Morin en compétition"
            width={1000}
            height={700}
            objectFit="contain"
            className="video-section__thumbnail"
          />
        </div>
      </section>
      <Presences />
      <Gallery photos={photos} />
      <section id="about" className="about">
        <div className="about__text">
          <p
            className="about__paragraph"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t.description}
          </p>

          <p
            className="about__paragraph"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {t.about1}
          </p>
          <p
            className="about__paragraph"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t.about2}
          </p>
        </div>
      </section>
    </Layout>
  );
}
