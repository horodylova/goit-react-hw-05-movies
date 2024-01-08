import React from 'react';

export const Image = ({ src = '', fallback, alt }) => {
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const imgSrc = src || fallback || defaultImg;
  return <img src={imgSrc} alt={alt} width={250} />;
};

export default Image;
