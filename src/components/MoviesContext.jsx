import React, { createContext, useContext, useState } from 'react';

const MoviesContext = createContext();

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};

export const MoviesProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const setResults = (results) => {
    setSearchResults(results);
  };

  return (
    <MoviesContext.Provider value={{ searchResults, setResults }}>
      {children}
    </MoviesContext.Provider>
  );
};
