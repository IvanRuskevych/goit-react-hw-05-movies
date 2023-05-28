import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import moviesApi from 'services/movies-api';
import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieById(movieId, '/reviews').then(response => {
      // console.log(response.results);
      return setReviews(response.results);
    });
  }, [movieId]);

  if (!reviews) return;

  if (reviews.length < 1) {
    return <p>We dont have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(({ author, content }) => {
        return (
          <li key={nanoid(5)}>
            {
              <>
                <h4 className={css.title}>{`Author: ${author}`}</h4>
                <p>{content} </p>
              </>
            }
          </li>
        );
      })}
    </ul>
  );
}
