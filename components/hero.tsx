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
          <p>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480.14-490.77q26.71 0 45.59-19.02 18.89-19.02 18.89-45.73 0-26.71-19.03-45.6Q506.57-620 479.86-620q-26.71 0-45.59 19.02-18.89 19.02-18.89 45.73 0 26.71 19.03 45.6 19.02 18.88 45.73 18.88ZM480-172.92q112.77-98.16 178.31-199.66t65.54-175.57q0-109.77-69.5-181.2-69.5-71.42-174.35-71.42t-174.35 71.42q-69.5 71.43-69.5 181.2 0 74.07 65.54 175.57T480-172.92Zm0 53.69Q339-243.92 267.58-351.81q-71.43-107.88-71.43-196.34 0-126.93 82.66-209.39Q361.46-840 480-840q118.54 0 201.19 82.46 82.66 82.46 82.66 209.39 0 88.46-71.43 196.34Q621-243.92 480-119.23Zm0-436.15Z"/></svg>
          Québec, CA
          </p>
          <SocialLinks />

          <Link className="link-video" href="#video" passHref>
            <svg
              className="scroll-button"
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#e8eaed"
            >
              <path d="M480-229.23 267.69-441.54 296-469.85l184 183.77 184-183.77 28.31 28.31L480-229.23Zm0-238.46L267.69-680 296-708.31l184 183.77 184-183.77L692.31-680 480-467.69Z" />
            </svg>
          </Link>
        </div>
        <Image
          src="https://res.cloudinary.com/djluqpaas/image/upload/v1727898791/melodie/hubko71bghadlej6qyyl.jpg"
          alt="Mélodie Morin - Mélo Morin"
          width={600}
          height={600}
          objectFit="contain"
          className="hero__img fadeUp delay-1"
          
        />
      </div>
    </section>
  );
};

export default Hero;
