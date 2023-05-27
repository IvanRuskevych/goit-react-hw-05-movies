import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import LayOut from './LayOut';
import Movies from 'pages/Movies';
import MovieDetailes from './MovieDetailes/MovieDetailes';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

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
