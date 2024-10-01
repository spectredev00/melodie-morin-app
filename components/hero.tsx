import Image from "next/image";
import SocialLinks from "./socialLinks";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="logo">
          <div className="animate__animated animate__fadeInLeft">MÉLO</div>
          <div className="animate__animated animate__fadeInRight">MORIN</div>
        </h1>
        <Image
          src="/images/img-noir.jpg"
          alt="Mélodie Morin - Mélo Morin"
          width={600}
          height={700}
          objectFit="contain"
          className="hero-img"
        />
      
      </div>
      <div className="hero-bottom">
          <SocialLinks />
          <a href="#about" className="scroll-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
              fill="#e8eaed"
            >
              <path d="M480-229.23 267.69-441.54 296-469.85l184 183.77 184-183.77 28.31 28.31L480-229.23Zm0-238.46L267.69-680 296-708.31l184 183.77 184-183.77L692.31-680 480-467.69Z" />
            </svg>
          </a>
        </div>
    </section>
  );
};

export default Hero;
