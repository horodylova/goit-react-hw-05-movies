import React from 'react';
import { useNavigate } from 'react-router-dom';

// import styles from './BackButton.module.css'; 

export const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleGoBack} className="back-button">
      Go Back
    </button>
  );
};

export default BackButton;

