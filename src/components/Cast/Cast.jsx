import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from 'services/movies-api';
import css from './Cast.module.css';
export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieById(movieId, '/credits').then(res => {
      // console.log(res);
      setCast(res.cast);
    });
  }, [movieId]);

  if (!cast) return;
  // console.log(cast);

  return (
    <ul className={css.list}>
      {cast.map(({ id, profile_path, name, character }) => {
        return (
          <li key={id} className={css.item}>
            {
              <>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://www.ukrposhta.ua/uploads/photos/shares/15.03.2022/photo_2022_04_23_08_34_35.jpg'
                  }
                  alt=""
                  width="375"
                  height="478"
                ></img>
                <h3>{name}</h3>
                <p className={css.text}>{`Character: ${character}`}</p>
              </>
            }
          </li>
        );
      })}
    </ul>
  );
}

// https://www.ukrposhta.ua/uploads/photos/shares/15.03.2022/photo_2022_04_23_08_34_35.jpg
