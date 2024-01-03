import React, { lazy, Suspense } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import {Layout} from './Layout/Layout';

const Home = lazy(() => import('../pages/Homepage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const  MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const SearchPage = lazy(() => import ('./FormSearch/FormSearch'));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Suspense>
    </Layout>
  );
};



 


