import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';
import '../i18n'; // Import the i18n configuration

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
