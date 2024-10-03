import { useState } from "react";
import Image from "next/image";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    document.body.classList.add("no-scroll"); // Empêcher le scroll pendant la lecture
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
    document.body.classList.remove("no-scroll"); // Restaurer le scroll après fermeture
  };

  return (
    <section
      id="video"
      className={`video-section ${isPlaying ? "video-section--playing" : ""}`}
    >
      {!isPlaying && (
        <>
          {/* Image d'aperçu */}
          <div className="video-section__preview">
            <Image
              src="/images/img10.jpg"
              alt="Video Preview"
              width={1200}
              height={900}
              objectFit="contain"
              className="video-section__thumbnail fadeUp"
            />
            <button
              className="video-section__play-button fadeIn delay-5"
              onClick={handlePlayClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="80px"
                width="80px"
                fill="#e8eaed"
                viewBox="0 -960 960 960"
              >
                <path d="M400-336.92 623.08-480 400-623.08v286.16ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </button>
          </div>
        </>
      )}
      {isPlaying && (
        <div className="video-section__wrapper">
          {/* Bouton pour fermer la vidéo */}
          <button
            className="video-section__close-button"
            onClick={handleCloseClick}
          >
            ✕
          </button>
          <iframe
            className="video-section__frame"
            src="https://www.youtube.com/embed/9713Rw7dK1I?autoplay=1&mute=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
