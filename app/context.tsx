"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Créer un type pour le contexte de langue
interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

// Créer le contexte avec une langue par défaut (anglais)
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider pour envelopper l'application et fournir l'état de la langue
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("en"); // Langue par défaut : anglais

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook pour accéder facilement au contexte de langue
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
