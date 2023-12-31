import React, { useState } from 'react';
import { FormSearch } from '../components/FormSearch/FormSearch';
import { searchMovies } from '..//api/apiDetails';

import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await searchMovies(query);
      setSearchResults(response.results || []);
      console.log(response);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <FormSearch onSearch={handleSearch} />
      {searchResults.length > 0 && (
        <div>
          <h3>Search Results</h3>
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {searchResults.length === 0 && (
        <div>
          <h3>No results found</h3>
        </div>
      )}
    </div>
  );
      }
  
export default MoviesPage;

