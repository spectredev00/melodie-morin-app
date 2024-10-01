import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Utilisation du hook de Next.js 13+
import fr from "./locales/fr.json";
import en from "./locales/en.json";

export default function useTranslation() {
  const pathname = usePathname(); // Récupérer le chemin actuel
  const [translations, setTranslations] = useState(fr); // Par défaut en français

  // Détecter la langue à partir du chemin ("/fr" ou "/en")
  useEffect(() => {
    const locale = pathname.startsWith("/fr") ? "fr" : "en";
    setTranslations(locale === "fr" ? fr : en);
  }, [pathname]);

  return {
    t: (key) => translations[key] || key, // Fonction de traduction sans annotation de type
  };
}
