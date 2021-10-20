import React from 'react';
import Image from 'next/image';
import { default as ReactImageGallery } from 'react-image-gallery';

const ImageGallery = ({ images }) => {
  return (
    <ReactImageGallery
      showPlayButton={false}
      showFullscreenButton={false}
      items={images.map(image => ({ original: image, thumbnail: image }))}
      renderItem={(image) => (
        <a href={image.original} target='_blank'>
          <Image
            src={image.original}
            alt={image.original}
            objectFit="cover"
            height={300}
            width={300}
          />
        </a>
      )}
      renderThumbInner={(image) => (
        <Image
          src={image.thumbnail}
          alt={image.thumbnail}
          objectFit="cover"
          height={300}
          width={300}
        />
      )}
  />);
};

export default ImageGallery;
