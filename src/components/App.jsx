import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { AppLayout } from './AppLayout';
// import { Reviews } from './Review/Reviews';
// import { Cast } from './Cast.js/Cast';

const HomePage = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetais = lazy(() => import('pages/MovieDetail'));
const Cast = lazy (()=> import('./Cast.js/Cast'))
const Reviews = lazy (()=> import('./Review/Reviews'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />

        <Route path="movies/:Id" element={<MovieDetais />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
