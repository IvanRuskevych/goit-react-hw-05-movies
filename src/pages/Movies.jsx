import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import moviesApi from 'services/movies-api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryMovie = searchParams.get('query') ?? '';
  // console.log(movies);
  // console.log(searchParams);

  useEffect(() => {
    if (!queryMovie === '') return;
    moviesApi.fetchMovieOnQuery(queryMovie).then(response => {
      // console.log(response);
      return setMovies(response.results);
    });
  }, [queryMovie]);

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.query;
    if (!value) return setSearchParams({});
    setSearchParams({ query: value });
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
