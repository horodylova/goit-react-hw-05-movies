import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../api/api';


const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
 </li>      
  ))}
      </ul>
    </div>
  );
};

export default HomePage;

