import React from 'react';

export const Cast = ({ cast }) => {
    return (
        <div>
          <h2>Cast</h2>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                  style={{ width: '100px', height: '150px', objectFit: 'cover' }}
                />
                <p>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      );
};

 


