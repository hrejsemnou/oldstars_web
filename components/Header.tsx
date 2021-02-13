import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

import Navigation from './Navigation';
import Gallery from './Gallery';

const Header = () => (
  <header className={styles.header}>
    <h1>
      <Link href="/">
        <a>
          <span className="text-red">OLD</span>
          <span className="text-white">stars</span>
        </a>
      </Link>
    </h1>
    <Gallery images={['/header1.jpg', '/header2.jpg', '/header3.jpg', '/header4.jpg']}/>
    <Navigation />
  </header>
);

export default Header;
