"use client";

import { useEffect, useState } from 'react';
import Layout from './layout';
import 'animate.css';
import { useTranslation } from 'react-i18next';

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
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <h1 className="logo">
            <span className="animate__animated animate__fadeInLeft">{t('title').split(' ')[0]}</span>
            <span className="animate__animated animate__fadeInRight">{` ${t('title').split(' ')[1]}`}</span>
          </h1>
          <button className="play-button">{t('play_video')}</button>
        </div>
        <div className="social">
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.instagram.com/melo.morin/">Instagram</a>
        </div>
        <a href="#about" className="scroll-button">{t('scroll')}</a>
      </section>
      <section id="about" className="section">
        <h2>{t('about')}</h2>
        <p>Brief biography of the hip-hop dancer...</p>
      </section>
      <section id="photos" className="section">
        <h2>{t('photos')}</h2>
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
      <footer id="contact" className="section">
        <h2>{t('contact')}</h2>
        <form>
          <label htmlFor="email">{t('email')}:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">{t('send')}</button>
        </form>
        <div className="social">
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.instagram.com/melo.morin/">Instagram</a>
        </div>
      </footer>
    </Layout>
  );
}
