import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ trendingMovies, searchQuery, searchResults }) => {
  const location = useLocation();

  return (
    <ul>
      {trendingMovies.map(movie => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{
              from: location,
              searchResults,
              searchQuery }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
