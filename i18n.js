import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import common from './public/locales/common.json';

const resources = {
  en: {
    common: common.en
  },
  fr: {
    common: common.fr
  }
};

i18n
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'fr',
    debug: true,
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
