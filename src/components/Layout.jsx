import React from 'react';
import { FormSearch } from './FormSearch/FormSearch';

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Film Seeker</h1>
      </header>

      <nav>
        <ul>
          <li>Home</li>
          <li>Movies</li>
        </ul>
      </nav>

      <main>
        <FormSearch />
        {children}
      </main>

      <footer>
        <p>© My App</p>
      </footer>
    </div>
  );
};
 
