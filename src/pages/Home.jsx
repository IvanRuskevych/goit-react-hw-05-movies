import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import moviesApi from 'services/movies-api';

const Home = () => {
  // console.log('Home');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // console.log(moviesApi.fetchMovies());
    moviesApi.fetchTrendingMovies().then(res => {
      // console.log(res.results);
      setMovies(res.results);
    });
  }, []);

  return (
    <>
      <div>Home</div>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
