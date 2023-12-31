import React, { useState } from 'react';

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
        className="search-input"
        placeholder="Search by name"
        style={{ padding: '8px', width: '200px', marginRight: '8px' }}
        value={searchquery}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="search-button"
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </form>
  );
};


