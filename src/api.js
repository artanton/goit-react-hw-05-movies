import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'abc18a67260269b802df6811b60af1e7';

export const fetchTrends = async () => {
  const params = new URLSearchParams({
    api_key: KEY,
  });

  const response = await axios.get(`trending/movie/day?${params}`);
  return response.data;
};

export const fetchSearchedItems = async query => {
  const params = new URLSearchParams({
    api_key: KEY,
    query: query,
    language: 'en-US',
    page: 1,
  });

  const response = await axios.get(`search/movie?${params}`);
  return response.data;
};

export const fetchMovieById = async movieId => {
  const params = new URLSearchParams({
    api_key: KEY,
    language: 'en-US',
  });
  const response = await axios.get(`/movie/${movieId}?${params}`);
  return response.data;
};

export const fetchCast = async movieId => {
  const params = new URLSearchParams({
    api_key: KEY,
    language: 'en-US',
  });
  const response = await axios.get(`/movie/${movieId}/credits?${params}`);
  return response.data;
};

export const fetchReviews = async movieId => {
  const params = new URLSearchParams({
    api_key: KEY,
    language: 'en-US',
  });
  const response = await axios.get(`/movie/${movieId}/reviews?${params}`);
  return response.data;
};
