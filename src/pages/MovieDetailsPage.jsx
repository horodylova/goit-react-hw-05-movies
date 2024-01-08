import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from '../api/apiOneMovie';
import { Link } from 'react-router-dom';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from '../components/Reviews/Reviews';
import { Image } from '../components/Image';

import styles from './PageStyles.module.css';

const MovieDetailsPage = ({ setSearchQuery }) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('cast');
  const navigate = useNavigate();

  const backLink = location?.state?.from ?? '/';
  const searchQuery = location?.state?.searchQuery;

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

  useEffect(() => {
    if (searchQuery) {
      setSearchQuery(searchQuery);
    }
  }, [searchQuery, setSearchQuery]);

  const fetchCast = () => {
    getMovieCredits(movieId)
      .then(credits => {
        setCast(credits.cast);
      })
      .catch(error => console.log(error))
      .finally(() => {
        handleTabChange();
      });
  };

  const fetchReviews = () => {
    getMovieReviews(movieId)
      .then(movieReviews => {
        setReviews(movieReviews.results);
      })
      .catch(error => console.log(error))
      .finally(() => {
        handleTabChange();
      });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    const state = { ...location.state };

    if (cast) {
      state.cast = cast;
    }

    if (reviews) {
      state.reviews = reviews;
    }

    navigate(location.pathname, { state });
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, genres, overview, release_date, vote_average } = movieDetails;

  return (
    <div className={styles['movie-details-container']}>
      <Link className={styles['back-button']} to={backLink}>
        Go Back{' '}
      </Link>
      <h2 className={styles['movie-title']}>{title}</h2>
      <Image alt={title} />

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
