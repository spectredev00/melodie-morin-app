


import SocialLinks from "@/components/socialLinks";
import Image from "next/image";

import Layout from "@/components/layout";

import { useLanguage } from "@/context";
const Contact = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Contact Mélo Morin",
      description:
        "To contact me, send me an email at melomorin3022@hotmail.com",
      seoTitle: "Contact Mélo Morin",
      seoDescription:
        "To contact me, send me an email at melomorin3022@hotmail.com",
      emailLabel: "Send me an email:",
    },
    fr: {
      title: "Contactez Mélo Morin",
      description:
        "Pour me contacter, envoyez-moi un courriel à melomorin3022@hotmail.com",
      seoTitle: "Contactez Mélo Morin",
      seoDescription:
        "Pour me contacter, envoyez-moi un email à melomorin3022@hotmail.com",
      emailLabel: "Pour me contacter, envoyez-moi un email :",
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <Layout>
      <section className="contact">
        <div className="contact__content">
          <Image
            src="/images/portrait-melodi.jpg"
            alt="Mélodie Morin - Mélo Morin"
            width={300}
            height={300}
            objectFit="contain"
            className="contact__img"
          />
          <p className="contact__text">{t.emailLabel}</p>
          <a href="mailto:melomorin3022@hotmail.com" className="contact__email">
            melomorin3022@hotmail.com
          </a>
          <SocialLinks />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
