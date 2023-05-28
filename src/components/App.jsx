import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import LayOut from './LayOut';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetailes from './MovieDetailes/MovieDetailes';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetailes = lazy(() =>
  import('../components/MovieDetailes/MovieDetailes')
);
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetailes />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route />
      </Route>
    </Routes>
  );
};
