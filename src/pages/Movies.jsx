import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import moviesApi from 'services/movies-api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const movieName = searchParams.get('query') ?? '';
  console.log(movieName);

  useEffect(() => {
    return moviesApi.fetchMovieById('', '', 'query');
  }, []);

  return (
    <div>
      <input type="text" value={movieName} />
    </div>
  );
};

export default Movies;
