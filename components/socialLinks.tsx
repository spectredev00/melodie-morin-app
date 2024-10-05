import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useLanguage } from "@/context";

const SocialLinks = () => {
  const { language } = useLanguage(); 

  return (
    <div className="social-links">
      <h3 className="social-links__title">
        {language === "fr" ? "Suivez-moi !" : "Follow us!"}
      </h3>
      <div className="divider"></div>
      <div className="social">
        <a
          href="https://www.facebook.com/melodie.morin.733"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__icon"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/melo.morin/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/watch?v=9713Rw7dK1I&t=7s"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__icon"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
