import './globals.css';
import Layout from './layout'; // Assurez-vous d'importer le composant Layout

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
