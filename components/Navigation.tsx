import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Navigation.module.scss';

const navItems = [
  { route: "/", label: "Aktuálně", column: 'left' },
  { route: "/program", label: "Program", column: 'center' },
  { route: "/repertoar", label: "Repertoár", column: 'right' },
  { route: "/oldstars", label: "OLDstars", column: 'left' },
  { route: "/herecke-studio", label: "Herecké studio", column: 'center' },
  { route: "/projekty", label: "Projekty", column: 'right' },
];

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const MenuToggle = () => {
    return (
      <button className={styles.menuButton} onClick={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon size="2x" icon={faBars} />
      </button>
    );
  }

  const router = useRouter();

  const renderLinks = () => navItems.map((item) => {
    let cName = '';
    if (item.route === router.pathname) {
      cName = styles.activeLink;
    }
    return (
      <div key={item.route} className={styles[item.column]}>
        <Link href={item.route}>
          <a onClick={() => setShowMenu(!showMenu)} className={showMenu ? `${styles.show} ${cName}` : cName}>
            {item.label}
          </a>
        </Link>
      </div>
    );
  });

  return (
    <nav className={styles.navigation}>
      <div className={styles.navLinks}>
        {renderLinks()}
      </div>
      <div className={styles.menuToggle}>
        <MenuToggle />
      </div>
    </nav>
  );
};

export default Navigation;
