import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import LayOut from './LayOut';
import Movies from 'pages/Movies';
import MovieDetailes from './MovieDetailes/MovieDetailes';
// import MoviesList from 'components/MoviesList';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path=":movieId" element={<MovieDetailes />} />
        <Route path="/movies" element={<Movies />} />
        <Route />
      </Route>
    </Routes>
  );
};
