import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './FormSearch.module.css';

export const FormSearch = ({ onSearch }) => {
  const [searchquery, setSearchquery] = useState('');
  const [setSearchParams] = useSearchParams();


  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchquery);
    
  };

  const handleChange = (e) => {
    setSearchquery(e.target.value);
    setSearchParams({searchquery}).toString()  
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles['search-input']}
        placeholder="Search by name"
        value={searchquery}
        onChange={handleChange}
      />
      <button type="submit" className={styles['search-button']}>
        Search
      </button>
    </form>
  );
};





