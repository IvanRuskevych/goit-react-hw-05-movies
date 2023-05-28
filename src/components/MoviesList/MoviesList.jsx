import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const location = useLocation();
  // console.log(location);

  return (
    <ul className={css.list}>
      {movies.map(({ id, title, name }) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            - {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
