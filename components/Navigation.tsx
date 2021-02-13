import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Navigation.module.scss';

const navItems = [
  { route: "/program", label: "Program" },
  { route: "/repertoar", label: "Repertoár" },
  { route: "/oldstars", label: "OLDstars" },
  { route: "/herecke-studio", label: "Herecké studio" },
  { route: "/projekty", label: "Projekty" },
];

const Navigation = () => {
  const router = useRouter();
  console.log(router.pathname);

  const renderLinks = () => navItems.map((item) => {
    return (
      <Link key={item.route} href={item.route}>
        <a className={item.route === router.pathname ? styles.activeLink : ""}>
          {item.label}
        </a>
      </Link>
    );
  });

  return (
    <nav className={styles.navigation}>
      {renderLinks()}
    </nav>
  );
};

export default Navigation;
