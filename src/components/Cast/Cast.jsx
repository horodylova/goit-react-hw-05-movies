import React from 'react';
import Image from '../Image';
import styles from './Cast.module.css';

export const Cast = ({ cast }) => {
  return (
    <div className={styles['cast-container']}>
      <h2 className={styles['cast-title']}>Cast</h2>
      <ul className={styles['cast-list']}>
        {cast.map(actor => (
          <li key={actor.id} className={styles['cast-item']}>
            <Image
             
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
