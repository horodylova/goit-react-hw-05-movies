import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Image from '../Image';
import styles from './Cast.module.css';

export const Cast = ({ cast }) => {
  const defaultImagePath =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'; 

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.from) {
      const newState = { ...location.state };
      newState.from = location.pathname;

    
      location.replace({ ...location, state: newState });
    }
  }, [location]);

  return (
    <div className={styles['cast-container']}>
      <h2 className={styles['cast-title']}>Cast</h2>
      <ul className={styles['cast-list']}>
        {cast.map(actor => (
          <li key={actor.id} className={styles['cast-item']}>
            <Image
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultImagePath
              }
              alt={`${actor.name} profile`}
              className={styles['cast-image']}
              fallback={defaultImagePath}
            />
            <p className={styles['cast-name']}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

