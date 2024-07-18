import { appWithTranslation } from 'next-i18next';
import './globals.css';
import '../i18n'; // Import the i18n configuration
import Layout from './layout'; // Assurez-vous d'importer le composant Layout

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
