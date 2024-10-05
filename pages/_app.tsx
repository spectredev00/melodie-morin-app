import "../globals.scss"; 
import "aos/dist/aos.css"; 

import type { AppProps } from "next/app";
import { LanguageProvider } from "@/context";
import { useEffect } from "react";
import AOS from "aos";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
