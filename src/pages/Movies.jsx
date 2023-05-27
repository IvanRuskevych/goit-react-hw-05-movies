import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import moviesApi from 'services/movies-api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  console.log(movies);
  // console.log(searchParams);
  const queryMovie = searchParams.get('query') ?? '';

  useEffect(() => {
    moviesApi.fetchMovieOnQuery(queryMovie).then(response => {
      // console.log(response);
      return setMovies(response.results);
    });
  }, [queryMovie]);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target.elements.query.value);
    const { value } = e.target.elements.query;
    setSearchParams({ query: value });
  };

  if (!movies) return;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">button</button>
      </form>
      <ul className="">
        {movies.map(({ id, title }) => (
          <li key={id} className="">
            <Link to={`${id}`}> - {title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
