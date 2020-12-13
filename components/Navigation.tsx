import React from 'react';
import Link from 'next/link';

import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link href="/program">
      <a>Program</a>
    </Link>
    <Link href="/repertoar">
      <a>Repertoár</a>
    </Link>
    <Link href="/oldstars">
      <a>OLDstars</a>
    </Link>
    <Link href="/herecke-studio">
      <a>Herecké studio</a>
    </Link>
    <Link href="/projekty">
      <a>Projekty</a>
    </Link>
    <Link href="/kontakty">
      <a>Kontakty</a>
    </Link>
  </nav>
);

export default Navigation;
