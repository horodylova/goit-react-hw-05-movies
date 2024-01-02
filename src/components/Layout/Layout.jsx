
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { BackButton } from '../BackButton/BackButton';

import styles from './Layout.module.css'; 

export const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className={styles.appContainer}>
      <header className={styles.appHeader}>
        <h1>
          <NavLink to="/">Film Seeker</NavLink>
        </h1>
      </header>

      <nav className={styles.appNav}>
        <ul>
          <li>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={styles.navLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      {location.state && location.state.from && <BackButton />}

      <main className={styles.appMain}>{children}</main>

      <footer className={styles.appFooter}>
        <p>© My App</p>
      </footer>
    </div>
  );
};

export default Layout;


