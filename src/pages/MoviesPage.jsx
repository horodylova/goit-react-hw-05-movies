import React, { useState, useEffect, useSearchParams } from 'react';
import { FormSearch } from '../components/FormSearch/FormSearch';
import { MovieList } from '../components/MoviesList/MoviesList';

import { searchMovies } from '..//api/apiDetails';

import styles from './PageStyles.module.css';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const handleSearch = async (query) => {
    try {
      const response = await searchMovies(query);
      setSearchResults(response.results || []);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setSearchParams('query', query);
  }, [query, setSearchParams]);

  return (
    <div className={styles['movies-container']}>
      <h2>Search Movies</h2>
      <FormSearch onSearch={handleSearch} />

      {searchResults.length > 0 && (
        <div className={styles['search-results']}>
          <h3>Search Results</h3>
          <MovieList trendingMovies={searchResults} />
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
