// next.config.mjs

import nextI18NextConfig from './next-i18next.config.js';

export default {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
  ...nextI18NextConfig,
  reactStrictMode: true,
  // Ajoutez d'autres configurations nécessaires ici
};
