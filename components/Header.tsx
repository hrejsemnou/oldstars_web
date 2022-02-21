import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';

import Navigation from './Navigation';
import Gallery from './Gallery';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerFirstRow}>
      <h1>
        <Link href="/">
          <a>
            <span className="text-red">OLD</span>
            <span className="text-white">stars</span>
          </a>
        </Link>
      </h1>
      <div>
        <Link href="/oldstars/prostory">
          <a>
            <span>Kde nás najdete?</span>
          </a>
        </Link>
        <a href="https://www.facebook.com/skupinaOLDstars">
          <Image
            src="/facebook.png"
            width={40}
            height={40}
          />
        </a>
        <a href="http://www.youtube.com/user/OLDstarsHarOLD">
          <Image
            src="/yt_logo.png"
            width={40}
            height={40}
          />
        </a>
        <a href="https://www.instagram.com/oldstars.cz/">
          <Image
            src="/ig_log.jpg"
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
    <Gallery images={['/header1.jpg', '/header2.jpg', '/header3.jpg', '/header4.jpg']}/>
    <Navigation />
  </header>
);

export default Header;
