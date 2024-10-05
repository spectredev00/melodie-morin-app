import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface Photo {
  img: string;
  alt: string;
}

interface ImageSliderProps {
  photos: Photo[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ photos }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="image-slider"
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <div className="image-slider__image-container">
            <Image
              src={photo.img}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
              className="image-slider__image"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
