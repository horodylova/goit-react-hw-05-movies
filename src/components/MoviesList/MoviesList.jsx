import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ trendingMovies }) => {
    
    const location = useLocation();

  return (
    <ul>
      {trendingMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{from:location}}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

