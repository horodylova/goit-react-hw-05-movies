import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useMoviesContext } from '../components/MoviesContext';
import { FormSearch } from '../components/FormSearch/FormSearch';
import { MovieList } from '../components/MoviesList/MoviesList';
import { searchMovies } from '..//api/apiDetails';
import styles from './PageStyles.module.css';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, ] = useSearchParams();
  const { setResults } = useMoviesContext();
  const navigate = useNavigate();
  const location = useLocation();

  const query = searchParams.get('searchquery');

  useEffect(() => {
    location.state = { from: location.pathname };
  }, [location]);

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

      {location.state?.from && (
        <div className={styles['back-button-container']}>
          <button className={styles['back-button']} onClick={() => navigate(location.state.from)}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;

