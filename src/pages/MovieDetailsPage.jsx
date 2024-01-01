
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../api/apiOneMovie';
import { Link } from 'react-router-dom';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState([]);

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

  const fetchCast = async () => {
    try {
      const credits = await getMovieCredits(movieId);
      setCast(credits.cast);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchReviews = async () => {
    try {
      const movieReviews = await getMovieReviews(movieId);
      setReviews(movieReviews.results);
    } catch (error) {
      console.error( error);
    }
  };

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
            <Link to={`cast`} onClick={fetchCast}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} onClick={fetchReviews}>Reviews</Link>
          </li>
        </ul>
      </nav>
      {cast && <Cast cast={cast} />}
      {reviews && <Reviews fetchReviews={fetchReviews} reviews={reviews} />}   
       </div>
  );
};

export default MovieDetailsPage;
