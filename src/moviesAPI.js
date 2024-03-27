import axios from 'axios';

const API_KEY = '1b919e67954e6288c80501bbc8b5f866';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return data;
};

export const getFilm = async movieId => {
  const data = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

export const getFilmByQuery = async query => {
  const data = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};

export const getCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};
