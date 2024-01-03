import React from 'react';
import styles from './Cast.module.css';

export const Cast = ({ cast }) => {
  return (
    <div className={styles['cast-container']}>
      <h2 className={styles['cast-title']}>Cast</h2>
      <ul className={styles['cast-list']}>
        {cast.map(actor => (
          <li key={actor.id} className={styles['cast-item']}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={`${actor.name} profile`}
              className={styles['cast-image']}
            />
            <p className={styles['cast-name']}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


 

