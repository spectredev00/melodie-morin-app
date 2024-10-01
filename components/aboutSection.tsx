import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Image avec bordure */}
        <div className="about-img">
          <Image
            src="/images/img13.jpg" // Remplace par le chemin de ton image
            alt="Mélodie Morin"
            width={500}
            height={750}
            className="profile-img"
          />
        </div>
        {/* Texte de présentation */}
        <div className="about-text">
          <h2>À propos de Mélodie Morin</h2>
          <p>
            Mélodie Morin, jeune danseuse, a découvert une passion pour la danse dès ses 4 ans. Elle adorait danser sur tous les styles de danse et elle prenait le contrôle des choix musicaux de la radio dans la voiture de ses parents.
          </p>
          <p>
            Ayant pratiqué dans deux écoles de danse à Chicoutimi; Studio Stylistique et Studio Funky Star, elle est ensuite déménagée à Montréal pour élargir ses horizons dans le milieu de la danse. Par la suite, elle pratique aux Studio Académie Danza, Rockwell Family et Innova danse.
          </p>
          <p>
            Elle continue son parcours en 2024-2025 en concentration danse à l’École Secondaire André-Laurendeau.
          </p>
          <p>
            Mélodie a participé à plusieurs compétitions dans les dernières années : Hit The Floor, Sidanse, DansEncore, Danse Award, Bravissimo, Hip Hop International (HHI), Reprezent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
