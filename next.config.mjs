import nextConfig from 'next-i18next';

export default {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
  ...nextConfig
};
