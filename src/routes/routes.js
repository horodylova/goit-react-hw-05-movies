
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Homepage'));
// const SearchPage = lazy(() => import('../pages/SearchPage'));
// const MovieDetails = lazy(() => import('../components/MovieDetails'));
// const NotFound = lazy(() => import('../components/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

