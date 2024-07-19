import { AppProps } from 'next/app';
import Layout from './layout'; // Assurez-vous d'importer le composant Layout
import './globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
