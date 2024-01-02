import React from 'react';
import styles from './Reviews.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles['reviews-container']}>
      <ul className={styles['review-list']}>
        {reviews.map(review => (
          <li key={review.id} className={styles['review-item']}>
            <p className={styles['review-author']}>{review.author}</p>
            <p className={styles['review-content']}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

