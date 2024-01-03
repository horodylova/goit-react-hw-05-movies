import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from '../api/apiOneMovie';
import { Link } from 'react-router-dom';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

import styles from './PageStyles.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('cast');

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
      console.error(error);
    }
  };

  const handleBack = () => {
    if (location.state?.from === '/search') {
      navigate('/search', {
        state: { searchResults: location.state.searchResults },
      });
    } else {
      navigate(-1);
    }
    console.log(location.state);
  };

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, backdrop_path, genres, overview, release_date, vote_average } =
    movieDetails;

  return (
    <div className={styles['movie-details-container']}>
      <h2 className={styles['movie-title']}>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={`${title} backdrop`}
        className={styles['movie-image']}
      />
      <div className={styles['movie-info']}>
        <p className={styles['movie-genres']}>
          Genres: {genres.map(genre => genre.name).join(', ')}
        </p>
        <p className={styles['movie-overview']}>Overview: {overview}</p>
        <p>Release Date: {release_date}</p>
        <p>Vote Average: {vote_average}</p>
      </div>
      <nav className={styles['movie-nav']}>
        <ul className={styles['movie-nav-list']}>
          <li>
            <button onClick={handleBack} className={styles['back-button']}>
              Go Back
            </button>
          </li>
          <li className={styles['movie-nav-item']}>
            <Link
              to={`cast`}
              className={`${styles['movie-nav-link']} ${
                activeTab === 'cast' && styles['active-tab']
              }`}
              onClick={() => {
                fetchCast();
                handleTabChange('cast');
              }}
            >
              Cast
            </Link>
          </li>
          <li className={styles['movie-nav-item']}>
            <Link
              to={`reviews`}
              className={`${styles['movie-nav-link']} ${
                activeTab === 'reviews' && styles['active-tab']
              }`}
              onClick={() => {
                fetchReviews();
                handleTabChange('reviews');
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles['movie-cast-reviews']}>
        {activeTab === 'cast' && cast && <Cast cast={cast} />}
        {activeTab === 'reviews' && reviews && (
          <Reviews fetchReviews={fetchReviews} reviews={reviews} />
        )}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
