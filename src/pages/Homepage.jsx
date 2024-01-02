import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../api/api';
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
      <ul className={styles['movie-list']}>
        {trendingMovies.map((movie) => (
          <li key={movie.id} className={styles['movie-item']}>
            <Link to={`/movies/${movie.id}`} className={styles['movie-link']}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;


