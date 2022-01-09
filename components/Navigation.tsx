import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { getMonthName } from '../lib/parseProgram';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const getNextMonths = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const nextMonths = [];
    for (let i = 0; i < 6; i++) {
      nextMonths.push((currentMonth + i) % 12);
    }
    return nextMonths;
  }
  const nextMonths = getNextMonths();
  const navItems = [
    { route: "/", label: "Aktuálně", column: 'left', subItems: [] },
    { route: "/program", label: "Program", column: 'center', subItems: [
      {
        route: `/program/${nextMonths[0]+1}`, label: getMonthName(nextMonths[0]), column: 'left',
      },
      {
        route: `/program/${nextMonths[1]+1}`, label: getMonthName(nextMonths[1]), column: 'center',
      },
      {
        route: `/program/${nextMonths[2]+1}`, label: getMonthName(nextMonths[2]), column: 'right',
      },
      {
        route: `/program/${nextMonths[3]+1}`, label: getMonthName(nextMonths[3]), column: 'left',
      },
      {
        route: `/program/${nextMonths[4]+1}`, label: getMonthName(nextMonths[4]), column: 'center',
      },
      {
        route: `/program/${nextMonths[5]+1}`, label: getMonthName(nextMonths[5]), column: 'right',
      },
      ]
    },
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
    { route: "/oldstars", label: "OLDstars", column: 'left', subItems: [
        {
          route: "/oldstars/o-nas", label: "O nás", column: 'left',
        },
        {
          route: "/oldstars/prostory", label: "Prostory", column: 'center',
        },
        {
          route: "/oldstars/spoluprace", label: "Spolupráce", column: 'right',
        },
      ]
    },
    { route: "/herecke-studio", label: "Herecké studio", column: 'center', subItems: [
        {
          route: "/herecke-studio/soubory", label: "Soubory", column: 'left',
        },
        {
          route: "/herecke-studio/pripravka", label: "Přípravka", column: 'center',
        },
        {
          route: "/herecke-studio/d-studio", label: "D studio", column: 'right',
        },
        {
          route: "/herecke-studio/clenove", label: "Členové", column: 'left',
        },
      ]
    },
    { route: "/projekty", label: "Projekty", column: 'right', subItems: [
        {
          route: "/projekty/on-the-roud", label: "OLDstars on the ROUD", column: 'left',
        },
        {
          route: "/projekty/festival-studentskych-divadel", label: "Festival Studentských Divadel", column: 'center',
        },
        {
          route: "/projekty/dalsi", label: "Další", column: 'right',
        },
        {
          route: "/projekty/zajezdy-a-turne", label: "Zájezdy a turné", column: 'left',
        },
      ]
    },
  ];

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

  const renderSubLinks = (subItems: any[]) => subItems?.map((subItem) => {
    let cName = '';
    if (subItem.route !== '/') {
    } if (router.asPath === subItem.route) {
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

  const isUrlFromFooter = () => {
    if (
      router.pathname === "/kontakty" ||
      router.pathname === "/press" ||
      router.pathname === "/podporte-nas" ||
      router.pathname === "/partneri"
    ) {
      return true;
    }
  }

  const subItemsToShow = () => {
    if (
      router.pathname === "/" || isUrlFromFooter()
    ) {
      return [];
    }
    return navItems.filter(item => router.pathname.includes(item.route) && item.route !== '/')[0]?.subItems;
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
      {subItemsToShow()?.length > 0 && (
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
