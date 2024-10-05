import React from "react";
import { useLanguage } from "@/context";

const AboutSection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "About Mélodie Morin",
      paragraph1:
        "Mélodie Morin, a young dancer, discovered her passion for dancing at the age of 4. She loved dancing to all styles of music and would take control of the car radio in her parents' car.",
      paragraph2:
        "Having trained at two dance schools in Chicoutimi; Studio Stylistique and Studio Funky Star, she later moved to Montreal to broaden her horizons in the dance industry. She has since trained at Studio Académie Danza, Rockwell Family, and Innova Dance.",
      paragraph3:
        "She is continuing her dance studies at École Secondaire André-Laurendeau for the 2024-2025 school year.",
      paragraph4:
        "Mélodie has participated in several competitions over the years: Hit The Floor, Sidanse, DansEncore, Danse Award, Bravissimo, Hip Hop International (HHI), Reprezent.",
    },
    fr: {
      title: "À propos de Mélodie Morin",
      paragraph1:
        "Mélodie Morin, jeune danseuse, a découvert une passion pour la danse dès ses 4 ans. Elle adorait danser sur tous les styles de danse et elle prenait le contrôle des choix musicaux de la radio dans la voiture de ses parents.",
      paragraph2:
        "Ayant pratiqué dans deux écoles de danse à Chicoutimi; Studio Stylistique et Studio Funky Star, elle est ensuite déménagée à Montréal pour élargir ses horizons dans le milieu de la danse. Par la suite, elle pratique aux Studio Académie Danza, Rockwell Family et Innova danse.",
      paragraph3:
        "Elle continue son parcours en 2024-2025 en concentration danse à l’École Secondaire André-Laurendeau.",
      paragraph4:
        "Mélodie a participé à plusieurs compétitions dans les dernières années : Hit The Floor, Sidanse, DansEncore, Danse Award, Bravissimo, Hip Hop International (HHI), Reprezent.",
    },
  };

  // Sélectionner la traduction en fonction de la langue
  const t =
    translations[language as keyof typeof translations] || translations.fr;

  return (
    <section className="about">
      <div className="about__container">
        <div className="about__text">
          <h2 className="about__title" data-aos="fade-up" data-aos-delay="80">
            {t.title}
          </h2>
          <div
            className="divider"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p
            className="about__paragraph"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            {t.paragraph1}
          </p>
          <p
            className="about__paragraph"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {t.paragraph2}
          </p>
          <p
            className="about__paragraph"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t.paragraph3}
          </p>
          <p
            className="about__paragraph"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {t.paragraph4}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
