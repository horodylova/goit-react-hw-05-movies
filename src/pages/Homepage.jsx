import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/api';
import { MovieList } from '../components/MoviesList/MoviesList';
import styles from './PageStyles.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles['home-container']}>
      <h2>Trending Today</h2>
      <MovieList trendingMovies={trendingMovies} />
    </div>
  );
};

export default HomePage;


