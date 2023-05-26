import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moviesApi from 'services/movies-api';

import css from './MoviesList.module.css';

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // console.log(moviesApi.fetchMovies());
    moviesApi.fetchTrendingMovies().then(res => {
      // console.log(res.results);
      setMovies(res.results);
    });
  }, []);

  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.item}>
          <Link to={`${id}`}> - {title}</Link>
        </li>
      ))}
    </ul>
  );
}
