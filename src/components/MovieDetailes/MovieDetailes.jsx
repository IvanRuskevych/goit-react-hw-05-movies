import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import moviesApi from 'services/movies-api';

import css from './MovieDetailes.module.css';

export default function MovieDetailes() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieById(movieId).then(res => {
      console.log(res.backdrop_path);
      setMovie(res);
    });
  }, [movieId]);

  if (!movie) return;
  const { poster_path, title, overview, vote_average, genres } = movie;

  return (
    <div>
      <p>`MovieDetailes: {movieId}</p>
      <Link type="link" to="/">
        Go back
      </Link>
      <div className={css.overviewWrap}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className={css.image}
          width="375"
          height="478"
        />
        <div className={css.overviewInfo}>
          <h1 className={css.titleFirst}>{title}</h1>
          <p>{`User score:  ${vote_average}`}</p>
          <h2 className={css.titleSecond}>Overview</h2>
          <p>{overview}</p>
          <h2 className={css.titleSecond}>Genres</h2>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <h2 className={css.titleSecond}>Additional information</h2>
        <ul className={css.list}>
          <li>
            <Link type="Link" to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link type="Link" to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
