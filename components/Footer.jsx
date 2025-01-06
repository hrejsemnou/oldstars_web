import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Footer.module.scss";

const navItems = [
  { route: "/kontakty", label: "Kontakty" },
  { route: "/press", label: "Press" },
  { route: "/partneri", label: "Partneři" },
  { route: "/podporte-nas", label: "Podpořte nás" },
  { route: "http://discord.com/app", label: "Přihlásit se" },
];

const Footer = () => {
  const router = useRouter();
  const renderFooterLinks = () =>
    navItems.map((item) => {
      let cName = "";
      if (item.route !== "/") {
        if (router.pathname.includes(item.route)) {
          cName = styles.activeLink;
        }
      } else if (router.pathname === item.route) {
        cName = styles.activeLink;
      }
      return (
        <Link legacyBehavior key={item.route} href={item.route}>
          {item.route === "http://discord.com/app" ? (
            <a className={cName} target="_blank">
              {item.label}
            </a>
          ) : (
            <a className={cName}>{item.label}</a>
          )}
        </Link>
      );
    });

  return (
    <footer>
      <nav className={styles.footer}>
        <div className={styles.footerLinks}>{renderFooterLinks()}</div>
      </nav>
    </footer>
  );
};

export default Footer;
