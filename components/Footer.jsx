import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Footer.module.scss';

const navItems = [
  { route: "/kontakty", label: "Kontakty" },
  { route: "/press", label: "Press" },
  { route: "/partneri", label: "Partneři" },
  { route: "/podporte-nas", label: "Podpořte nás" },
];

const Footer = () => {
  const router = useRouter();
  const renderFooterLinks = () => navItems.map((item) => {
    let cName = '';
    if (item.route !== '/') {
      if (router.pathname.includes(item.route)) {
        cName = styles.activeLink;
      }
    } else if (router.pathname === item.route) {
      cName = styles.activeLink;
    }
    return (
      <Link key={item.route} href={item.route}>
        <a className={cName}>
          {item.label}
        </a>
      </Link>
    );
  });

  return (
    <footer>
      <nav className={styles.footer}>
        <div className={styles.footerLinks}>
          {renderFooterLinks()}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
