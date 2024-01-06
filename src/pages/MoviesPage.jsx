import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormSearch } from '../components/FormSearch/FormSearch';
import { MovieList } from '../components/MoviesList/MoviesList';
import { searchMovies } from '..//api/apiDetails';
import styles from './PageStyles.module.css';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get('searchquery');

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        const response = await searchMovies(query);
        setSearchResults(response.results);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, [query]);

  return (
    <div className={styles['movies-container']}>
      <h2>Search Movies</h2>
      <FormSearch />

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
