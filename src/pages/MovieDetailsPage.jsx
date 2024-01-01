import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/apiOneMovie';
import { Link } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, backdrop_path, genres, overview, release_date, vote_average } =
    movieDetails;

  return (
    <div>
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={`${title} backdrop`}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
      />
      <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
      <p>Overview: {overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Vote Average: {vote_average}</p>
      <nav>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MovieDetailsPage;
