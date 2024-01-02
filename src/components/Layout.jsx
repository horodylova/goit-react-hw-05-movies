import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import BackButton from './BackButton/BackButton';

import 'index.css'; 

export const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <header className="app-header">
        <h1>
          <NavLink to="/">Film Seeker</NavLink>
        </h1>
      </header>

      <nav className="app-nav">
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="nav-link">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

  
      {location.state && location.state.from && <BackButton />}

      <main>{children}</main>

      <footer className="app-footer">
        <p>© My App</p>
      </footer>
    </div>
  );
};

export default Layout;


