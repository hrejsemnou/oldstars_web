import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Gallery.module.scss";

interface Props {
  images: string[];
}

const Gallery: React.FC<Props> = ({ images }) => {
  const imageElements = images.map((image, index) => (
    <Link legacyBehavior href="/" key={`${image}${index}`}>
      <a className={styles.galleryImageContainer}>
        <Image
          src={image}
          alt={`Header image ${index}`}
          height={150}
          width={250}
          layout="responsive"
        />
      </a>
    </Link>
  ));
  return <div>{imageElements}</div>;
};

export default Gallery;
