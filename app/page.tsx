"use client";

import { useEffect, useState } from 'react';
import 'animate.css';
import { useTranslation } from 'react-i18next';
import Layout from './layout';

export default function Home() {
  const { t } = useTranslation('common');
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/medias.json')
      .then(response => response.json())
      .then(data => {
        setPhotos(data.photos);
        setVideos(data.videos);
      });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="logo">
            <span className="animate__animated animate__fadeInLeft">MÉLODIE</span>
            <span className="animate__animated animate__fadeInRight">MORIN</span>
          </h1>
          <button className="play-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="M400-336.92 623.08-480 400-623.08v286.16ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          </button>
        </div>
        <div className='hero-bottom'>
        <div className="social">
          <a href="https://www.facebook.com">FACEBOOK</a>
          <a href="https://www.instagram.com/melo.morin/">INSTAGRAM</a>
        </div>
        <a href="#about" className="scroll-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="M480-229.23 267.69-441.54 296-469.85l184 183.77 184-183.77 28.31 28.31L480-229.23Zm0-238.46L267.69-680 296-708.31l184 183.77 184-183.77L692.31-680 480-467.69Z"/></svg>
        </a>
        </div>
   
      </section>
      <section id="about" className="section">
        <div className='about-content'>
        <h2>{t('about')}</h2>
        <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
       
      </section>
      <section id="photos">
        <div className="gallery">
          {photos.map((photo, index) => (
            <img key={index} src={photo.src} alt={photo.alt} />
          ))}
        </div>
      </section>
      <section id="videos" className="section">
        <h2>{t('videos')}</h2>
        <div className="gallery">
          {videos.map((video, index) => (
            <img key={index} src={video.src} alt={video.alt} />
          ))}
        </div>
      </section>
      <footer id="contact" className='contact'>
  
          
          <a href="mailto:">lecouriel@gmail.com</a>

      </footer>
    </>
  );
}
