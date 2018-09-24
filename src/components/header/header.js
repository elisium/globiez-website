import React from 'react';
import Link from 'gatsby-link';
import styles from './header.module.css';
import logo from './globiez_logo.svg';
import classNames from "classnames";

const Header = ({ currentPath }) => {
  return (
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
            className={classNames(styles.nav_link, {
              [styles.active]: (currentPath || "").search(/vacancies/) >= 0
            })}
          >
            Vacancies
          </Link>
          <Link
            to="/qa"
            className={styles.nav_link}
          >
            Q&A
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
