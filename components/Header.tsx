import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

import Navigation from './Navigation';

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
    <Navigation />
  </header>
);

export default Header;
