import Image from "next/image";
import SocialLinks from "./socialLinks";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div>
          <h1 className="hero__logo">
            <div className="hero__logo-part animate__animated animate__fadeInLeft">
              MÉLO
            </div>
            <div className="hero__logo-part animate__animated animate__fadeInRight">
              MORIN
            </div>
          </h1>
          <SocialLinks />
          {/* Encapsuler le bouton dans un <a> */}
          <Link className="link-video" href="#video" passHref>
            <svg
              className="scroll-button"
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
              fill="#e8eaed"
            >
              <path d="M480-229.23 267.69-441.54 296-469.85l184 183.77 184-183.77 28.31 28.31L480-229.23Zm0-238.46L267.69-680 296-708.31l184 183.77 184-183.77L692.31-680 480-467.69Z" />
            </svg>
          </Link>
        </div>
        <Image
          src="/images/img-noir.jpg"
          alt="Mélodie Morin - Mélo Morin"
          width={600}
          height={600}
          objectFit="contain"
          className="hero__img"
        />
      </div>
    </section>
  );
};

export default Hero;
