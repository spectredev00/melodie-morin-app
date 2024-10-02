"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context";
const Prix = () => {
  const { language } = useLanguage(); // Utiliser le contexte de langue

  // Traductions des prix
  const translations = {
    en: {
      title: "Awards and Mentions",
      description: "With a strong determination to break into the dance industry, Mélodie devotes many hours each day to improve her skills. She aspires to join a touring troupe, perform in a theater, on television, or even at the Superbowl halftime show.",
      prixList: [
        {
          title: "The Dance Award 2024",
          description: "Judge’s pick award",
        },
        {
          title: "Bravissimo 2024",
          description: "Solo 2nd place + Judges' favorite",
        },
        {
          title: "Hit the Floor St-Hyacinthe 2024",
          description: "Duo 1st place + Hit Of The Day",
        },
        {
          title: "Sidanse 2023",
          description: "Solo 1st place + 'Buzz' Mention",
        },
        {
          title: "DansEncore 2023",
          description: "Solo 2nd place + Judges' favorite",
        },
        {
          title: "Jump Toronto 2023",
          description: "Scholarship",
        },
      ],
    },
    fr: {
      title: "Prix et mentions",
      description: "Avec une grande volonté de percer dans le milieu de la danse, Mélodie consacre de nombreuses heures chaque jour pour se perfectionner. Elle aspire à intégrer une troupe de tournée, un spectacle au théâtre, à la télévision ou encore la mi-temps au Superbowl.",
      prixList: [
        {
          title: "The Dance Award 2024",
          description: "Judge’s pick award",
        },
        {
          title: "Bravissimo 2024",
          description: "Solo 2e place + Coup de coeur",
        },
        {
          title: "Hit the Floor St-Hyacinthe 2024",
          description: "Duo 1ère place + Hit Of The Day",
        },
        {
          title: "Sidanse 2023",
          description: "Solo 1ère place + Mention 'Buzz'",
        },
        {
          title: "DansEncore 2023",
          description: "Solo 2ème place + Coup de coeur",
        },
        {
          title: "Jump Toronto 2023",
          description: "Bourse",
        },
      ],
    },
  };

  // Sélectionner la traduction en fonction de la langue
  const t = translations[language as keyof typeof translations] || translations.fr;

  return (
    <section className="about about--reverse">
      <div className="about__container">
        {/* Image avec bordure */}
        <div className="about__img">
          <Image
            src="/images/img11.jpg"
            alt="Trophée"
            width={500}
            height={500}
            className="about__profile-img"
          />
        </div>
        {/* Texte avec liste des prix */}
        <div className="about__text">
          <h2 className="about__title fadeLeft delay-1">{t.title}</h2>
          <div className="divider fadeLeft delay-2"></div>
          <ul className="prix__list">
            {t.prixList.map((prix, index) => (
              <li key={index} className="prix__item fadeLeft delay-3">
                <span className="prix__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M780-400q-27.92 0-49.46-17t-27.92-43H100v-40h602.62q6.38-26 27.92-43 21.54-17 49.46-17 33.6 0 56.8 23.19 23.2 23.18 23.2 56.77 0 33.58-23.2 56.81Q813.6-400 780-400Z" />
                  </svg>
                </span>
                <span className="prix__details">
                  {prix.title} – {prix.description}
                </span>
              </li>
            ))}
     
            <p className="prix__item fadeLeft delay-5">

                {t.description}

            </p>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Prix;
