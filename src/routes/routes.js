
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Homepage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const  MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));



// const NotFound = lazy(() => import('../components/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

