import { useLanguage } from "@/context";
export default function Footer() {
  const { language } = useLanguage(); // Utiliser le contexte de langue

  return (
    <footer id="contact" className="footer">
      <div className="footer__wrapper">
        <a href="/" className="footer__link">
          Mélo Morin
        </a>
        <a href="/contact" className="footer__link">
          {/* Texte dynamique en fonction de la langue */}
          <span>{language === "fr" ? "Contact" : "Contact us"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M780-400q-27.92 0-49.46-17t-27.92-43H100v-40h602.62q6.38-26 27.92-43 21.54-17 49.46-17 33.6 0 56.8 23.19 23.2 23.18 23.2 56.77 0 33.58-23.2 56.81Q813.6-400 780-400Z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
