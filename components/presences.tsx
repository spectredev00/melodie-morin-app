"use client";

import React from "react";
import { useLanguage } from "@/app/context";
import Image from "next/image";

const Presences = () => {
  const { language } = useLanguage(); // Utiliser le contexte de langue

  // Traductions des présences sur scène
  const translations = {
    en: {
      title: "Stage Presence",
      description:
        "Mélodie has had several stage appearances in well-known events and shows.",
      presencesList: [
        {
          title: "New Year's Special – En Direct de L’Univers 2022",
          description: "Radio Canada",
        },
        {
          title: "The Masked Singer 2023",
          description: "TVA",
        },
        {
          title: "Corporate Advertisement 2019",
          description: "Studio SRV",
        },
        {
          title: "Corporate Advertisement 2019",
          description: "Virtuel Studio",
        },
        {
          title: "Showcase – Artys 2023",
          description: "",
        },
        {
          title: "Showcase Bravissimo 2024",
          description: "",
        },
      ],
    },
    fr: {
      title: "Présence sur scène",
      description:
        "Mélodie a fait plusieurs apparitions sur scène lors d’événements et d’émissions reconnus.",
      presencesList: [
        {
          title: "Spécial du jour de l’an – En Direct de L’Univers 2022",
          description: "Radio Canada",
        },
        {
          title: "Chanteur Masqué 2023",
          description: "TVA",
        },
        {
          title: "Publicité corporative 2019",
          description: "Studio SRV",
        },
        {
          title: "Publicité corporative 2019",
          description: "Virtuel Studio",
        },
        {
          title: "Showcase – Artys 2023",
          description: "",
        },
        {
          title: "Showcase Bravissimo 2024",
          description: "",
        },
      ],
    },
  };

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
            {t.description}
          </p>
          <ul className="prix__list">
            {t.presencesList.map((presence, index) => (
              <li
                key={index}
                className="prix__item"
                data-aos="fade-up"
                data-aos-delay="150"
              >
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
                  <strong>{presence.title}</strong>{" "}
                  {presence.description && `– ${presence.description}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Presences;
