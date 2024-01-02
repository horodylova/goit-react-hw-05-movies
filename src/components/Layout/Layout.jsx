
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Layout.module.css'; 

export const Layout = ({ children }) => {

  return (
    <div className={styles['app-container']}> 
      <header className={styles['app-header']}>
        <h1>
          Film Seeker
        </h1>
      </header>

      <nav className={styles['app-nav']}>
        <ul>
          <li>
            <NavLink to="/" className={styles['nav-link']}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={styles['nav-link']}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className={styles['app-main']}>{children}</main>

      <footer className={styles['app-footer']}>
        <p>© My App</p>
      </footer>
    </div>
  );
};

export default Layout;


