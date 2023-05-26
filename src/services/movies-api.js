async function fetchTrendingMovies() {
  return await fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=7c0c458e245909c66f3397c50f32766a'
  )
    .then(response => {
      // console.log('response.ok: ', response.ok);
      if (response.ok) {
        return response.json();
      }
    })
    .catch(err => console.error(err));
}

async function fetchMovieById(movie_id) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=7c0c458e245909c66f3397c50f32766a`
  )
    .then(response => {
      console.log('response.ok: ', response.ok);
      if (response.ok) {
        console.log(response);
        return response.json();
      }
    })
    .catch(err => console.error(err));
}

const moviesApi = { fetchTrendingMovies, fetchMovieById };

export default moviesApi;
