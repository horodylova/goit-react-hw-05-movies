import React, { useState } from 'react';
import { FormSearch } from '../components/FormSearch/FormSearch';
import { searchMovies } from '..//api/apiDetails';

import { Link } from 'react-router-dom';

import styles from './PageStyles.module.css';


const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await searchMovies(query);
      setSearchResults(response.results || []);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles['movies-container']}>
      <h2>Search Movies</h2>
      <FormSearch onSearch={handleSearch} />

      {searchResults.length > 0 && (
        <div className={styles['search-results']}>
          <h3>Search Results</h3>
          <ul className={styles['movie-list']}>
            {searchResults.map((movie) => (
              <li key={movie.id} className={styles['movie-item']}>
                <Link to={`/movies/${movie.id}`} className={styles['movie-link']}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;