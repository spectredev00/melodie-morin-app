import Head from 'next/head';
import SocialLinks from '@/components/socialLinks';
import Image from 'next/image';

const Contact = () => {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Contactez Mélo Morin</title>
        <meta name="description" content="Pour me contacter, envoyez-moi un email à melomorin@example.com" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contactez Mélo Morin" />
        <meta property="og:description" content="Pour me contacter, envoyez-moi un email à melomorin@example.com" />
        <meta property="og:image" content="/images/portrait-melodi.jpg" /> 
        <meta property="og:url" content="https://ton-site.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="Contactez Mélo Morin" />
        <meta name="twitter:description" content="Pour me contacter, envoyez-moi un email à melomorin@example.com" />
        <meta name="twitter:image" content="/images/contact-image.jpg" /> 
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="contact-section">
        <div className="contact-content">
        <Image
          src="/images/portrait-melodi.jpg"
          alt="Mélodie Morin - Mélo Morin"
          width={300}
          height={300}
          objectFit="contain"
          className='contact-img'
        />
          <p>Pour me contacter, envoyez-moi un email :</p>
          <a href="mailto:melomorin@example.com">melomorin@example.com</a>
        
        <SocialLinks />
        </div>
       
       
      </section>
    </>
  );
};

export default Contact;

  