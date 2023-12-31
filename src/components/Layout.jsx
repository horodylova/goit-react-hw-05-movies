import React from 'react';
import { NavLink } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Film Seeker</h1>
      </header>

      <nav>
        <ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <main>
        {children}
      </main>

      <footer>
        <p>© My App</p>
      </footer>
    </div>
  );
};

