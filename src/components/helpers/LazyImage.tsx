import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = ({ image }: any) => {
  console.log(image.alt);
  return (
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      placeholderSrc={image.src}
      effect="blur"
    />
  );
};

export default LazyImage;
