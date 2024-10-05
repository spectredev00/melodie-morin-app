import { useLanguage } from "@/context";

const Header = () => {
  const { language, setLanguage } = useLanguage(); // Accéder à la langue actuelle et la fonction pour changer la langue

  const toggleLanguage = () => {
    // Changer la langue
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <header id="header" className="header">
      <nav className="header__navbar">
        <ul className="header__list">
          <li className="lang">
            {/* Bouton pour changer la langue */}
            <button
              onClick={toggleLanguage}
              className="header__link"
              title="Langue"
            >
              {language === "en" ? "FRANÇAIS" : "ENGLISH"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
