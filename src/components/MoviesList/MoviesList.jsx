import { Link } from 'react-router-dom';

import css from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`}> - {title}</Link>
        </li>
      ))}
    </ul>
  );
}
