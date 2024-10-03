import Masonry from "react-masonry-css";
import Image from "next/image";

interface GalleryProps {
  photos: { img: string; alt: string }[];
}

export default function Gallery({ photos }: GalleryProps) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="gallery"
      columnClassName="gallery__column"
    >
      {photos.map((photo, index) => (
        <div key={index} className="gallery__item">
          <Image
            src={photo.img}
            alt={photo.alt}
            layout="responsive"
            width={350}
            height={450}
            className="gallery__img"
          />
        </div>
      ))}
    </Masonry>
  );
}
