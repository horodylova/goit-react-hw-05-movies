
import React from 'react';

export const Reviews = ({ fetchReviews, reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
