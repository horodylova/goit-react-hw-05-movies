import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ trendingMovies, searchQuery, searchResults }) => {
  const location = useLocation();

  return (
    <ul>
      {trendingMovies.map(movie => (
        <li key={movie.id}>
          <Link
             to={{
              pathname: `/movies/${movie.id}`,
              search: `?searchQuery=${searchQuery}`,
            }}
            state={{
              from: location,
              searchResults: searchResults || [],
              searchQuery: searchQuery || ''}}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
