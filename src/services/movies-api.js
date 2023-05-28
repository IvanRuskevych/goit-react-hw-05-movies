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

async function fetchMovieById(movie_id, queryType = '') {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}${queryType}?api_key=7c0c458e245909c66f3397c50f32766a`
  )
    .then(response => {
      // console.log('response.ok: ', response.ok);
      if (response.ok) {
        // console.log(response);
        return response.json();
      }
    })
    .catch(err => console.error(err));
}

async function fetchMovieOnQuery(query) {
  // console.log(query);
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=7c0c458e245909c66f3397c50f32766a&query=${query}`
  )
    .then(response => {
      // console.log('fetchMovieOnQuery-->response.ok: ', response.ok);
      if (response.ok) {
        // console.log('fetchMovieOnQuery-->response: ', response);
        return response.json();
      }
    })
    .catch(err => console.error(err));
}

const moviesApi = { fetchTrendingMovies, fetchMovieById, fetchMovieOnQuery };

export default moviesApi;

// 'https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1'
