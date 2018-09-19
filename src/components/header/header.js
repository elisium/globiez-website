import React from 'react';
import Link from 'gatsby-link';
import styles from './header.module.css';
import logo from './globiez_logo.svg';
console.log(styles);

const Header = ({ siteTitle }) => (
  <div className={styles.main}>
    <div className={`container ${styles.flex}`}>
      <Link
        to="/"
        className={styles.logo}
      >
        <img src={logo} alt="Globiez Logo" />
      </Link>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={styles.nav_link}
        >
          Home
        </Link>
        <Link
          to="/vacancies/"
          className={styles.nav_link}
        >
          Vacancies
        </Link>
      </nav>
    </div>
  </div>
)

export default Header
