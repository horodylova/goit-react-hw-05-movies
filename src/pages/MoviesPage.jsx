import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useMoviesContext } from '../components/MoviesContext';
import { FormSearch } from '../components/FormSearch/FormSearch';
import { MovieList } from '../components/MoviesList/MoviesList';
import { searchMovies } from '..//api/apiDetails';
import styles from './PageStyles.module.css';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchResults: savedResults, setResults } = useMoviesContext();
  const navigate = useNavigate();

  const query = searchParams.get('searchquery');

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        const response = await searchMovies(query);
        setSearchResults(response.results);
        setResults(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, [query, setResults]);

  const handleSearch = async (query) => {
    try {
      const response = await searchMovies(query);
      setSearchResults(response.results);
      setResults(response.results);
      navigate(`/movies?searchquery=${query}`);
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
          <MovieList trendingMovies={searchResults} />
        </div>
      )}

      {savedResults.length > 0 && (
        <div className={styles['search-results']}>
          <h3>Saved Results</h3>
          <MovieList trendingMovies={savedResults} />
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
