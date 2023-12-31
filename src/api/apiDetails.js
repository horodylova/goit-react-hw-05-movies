import axios from 'axios';
import { config } from './config';

const { apiKey, baseUrl } = config;

export const searchMovies = async (query) => {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};


