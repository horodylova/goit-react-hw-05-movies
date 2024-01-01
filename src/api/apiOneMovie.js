import axios from 'axios';
import { config } from './config';

const { apiKey, baseUrl } = config;

export const getMovieDetails = async (movieId) => {
  const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieCredits = async (movieId) => {
  const url = `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieReviews = async (movieId) => {
  const url = `${baseUrl}/movie/${movieId}/reviews?api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};