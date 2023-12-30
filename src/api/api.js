import axios from 'axios';
import { config } from './config';

const { apiKey, baseUrl } = config;

export const getTrendingMovies = async () => {
  const url = `${baseUrl}trending/movie/week?api_key=${apiKey}`;
  
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
