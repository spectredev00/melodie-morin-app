"use client"; // Cela doit être en haut du fichier pour marquer ce composant comme un composant côté client

import { useEffect, useState } from "react";
import "animate.css";
import Layout from "./layout";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Head from "next/head";
import useTranslation from "../useTranslation"; // Hook pour gérer les traductions
import VideoSection from "@/components/videoSection";
import Hero from "@/components/hero";
import AboutSection from "@/components/aboutSection";

export default function Home() {
  const { t } = useTranslation(); // Utilisation du hook de traduction
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/medias.json")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
        setVideos(data.videos);
      });
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ton-site.com" />
      </Head>

    {/*   <Hero />

      <VideoSection />
      <AboutSection />

      {/* Section About avec texte dynamique en fonction de la langue 
      <section id="about" className="section">
        <div className="about-content">
          <h2>{t("about_title")}</h2>
          {t("about_paragraphs").map((paragraph, index) => (
            <p
              key={index}
              className="animate__animated animate__fadeInUp animate__delay-1s"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section id="photos" className="section section-gallery">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="gallery"
          columnClassName="gallery-column"
        >
          {photos.map((photo, index) => (
            <div key={index} className="gallery-item">
              <Image src={photo.img} alt={photo.alt} width={350} height={450} />
            </div>
          ))}
        </Masonry>
      </section> */}
    </>
  );
}
