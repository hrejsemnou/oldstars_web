import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Navigation.module.scss';

const navItems = [
  { route: "/", label: "Aktuálně", column: 'left', subItems: [] },
  { route: "/program", label: "Program", column: 'center', subItems: [] },
  { route: "/repertoar", label: "Repertoár", column: 'right', subItems: [
      {
        route: "/repertoar/aktualni", label: "Aktuální", column: 'left',
      },
      {
        route: "/repertoar/hoste", label: "Hosté", column: 'center',
      },
      {
        route: "/repertoar/monodramata", label: "Monodramata", column: 'right',
      },
      {
        route: "/repertoar/archiv", label: "Archiv", column: 'left',
      },
    ]
  },
  { route: "/oldstars", label: "OLDstars", column: 'left', subItems: [] },
  { route: "/herecke-studio", label: "Herecké studio", column: 'center', subItems: [] },
  { route: "/projekty", label: "Projekty", column: 'right', subItems: [] },
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
    if (item.route !== '/') {
      if (router.pathname.includes(item.route)) {
        cName = styles.activeLink;
      }
    } else if (router.pathname === item.route) {
      cName = styles.activeLink;
    }
    return (
      <div key={item.route} className={styles[item.column]}>
        <Link href={item.subItems.length > 0 ? item.subItems[0].route : item.route}>
          <a onClick={() => setShowMenu(!showMenu)} className={showMenu ? `${styles.show} ${cName}` : cName}>
            {item.label}
          </a>
        </Link>
      </div>
    );
  });

  const renderSubLinks = (subItems: any[]) => subItems.map((subItem) => {
    let cName = '';
    if (subItem.route !== '/') {
      if (router.pathname.includes(subItem.route)) {
        cName = styles.activeLink;
      }
    } else if (router.pathname === subItem.route) {
      cName = styles.activeLink;
    }
    return (
      <div key={subItem.route} className={styles[subItem.column]}>
        <Link href={subItem.route}>
          <a onClick={() => setShowMenu(!showMenu)} className={showMenu ? `${styles.show} ${cName}` : cName}>
            {subItem.label}
          </a>
        </Link>
      </div>
    );
  });

  const subItemsToShow = () => {
    if (router.pathname === "/") {
      return [];
    }
    return navItems.filter(item => router.pathname.includes(item.route) && item.route !== '/')[0].subItems;
  };

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.navLinks}>
          {renderLinks()}
        </div>
        <div className={styles.menuToggle}>
          <MenuToggle />
        </div>
      </nav>
      {subItemsToShow().length > 0 && (
        <hr />
      )}
      <nav className={styles.navigation}>
        <div className={styles.navLinks}>
          {renderSubLinks(subItemsToShow())}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
