"use client";

import { useEffect, useState } from 'react';
import 'animate.css';
import Layout from './layout';
import Masonry from 'react-masonry-css';
import Image from 'next/image';

export default function Home() {
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

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
    {/*   <section className="hero">
        <div className="hero-content">
          <div className="logo">
            <div className="animate__animated animate__fadeInLeft">MÉLODIE</div>
            <div className="animate__animated animate__fadeInRight">MORIN</div>
          </div>
          <button className="play-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="M400-336.92 623.08-480 400-623.08v286.16ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          </button>
        </div>
        <div className='hero-bottom'>
          <div className="social">
            <a href="https://www.facebook.com/melodie.morin.733">FACEBOOK</a>
            <a href="https://www.instagram.com/melo.morin/">INSTAGRAM</a>
          </div>
          <a href="#about" className="scroll-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="M480-229.23 267.69-441.54 296-469.85l184 183.77 184-183.77 28.31 28.31L480-229.23Zm0-238.46L267.69-680 296-708.31l184 183.77 184-183.77L692.31-680 480-467.69Z"/></svg>
          </a>
        </div>
      </section>
      <section id="about" className="section">
        <div className='about-content'>
          <h2>About</h2>
          <p>
            En attente du texte<br/>
          </p>
        </div>
      </section>
      <section id="photos" className="section">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="gallery"
          columnClassName="gallery-column">
          {photos.map((photo, index) => (
            <div key={index} className="gallery-item">
              <Image src={photo.img} alt="Mélodie Morin Danseuse" width={400} height={500} />
            </div>
          ))}
        </Masonry>
      </section> */}
      <footer id="contact" className='contact'>
        <p>Mélodie Morin</p>
        <br />
        <a href="mailto:lecouriel@gmail.com">melodiemorin@gmail.com</a>
        <br />
      </footer>
    </>
  );
}
