import React, { useState } from 'react';
import styles from './FormSearch.module.css';

export const FormSearch = ({ onSearch }) => {
  const [searchquery, setSearchquery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchquery);
  };

  const handleChange = (e) => {
    setSearchquery(e.target.value);
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




