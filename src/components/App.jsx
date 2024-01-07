import React, { lazy, Suspense, useState } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import {Layout} from './Layout/Layout';

const Home = lazy(() => import('../pages/Homepage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const  MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const SearchPage = lazy(() => import ('./FormSearch/FormSearch'));




export const App = () => {
  
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}/>} />
        <Route path="/movies" element={<MoviesPage  searchResults={searchResults}
            setSearchResults={setSearchResults}  />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Suspense>
    </Layout>
  );
};



 


