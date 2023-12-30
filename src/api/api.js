import axios from 'axios';
import { config } from './config';

const { apiKey, baseUrl } = config;

export const getTrendingMovies = async () => {
  const url = `${baseUrl}/trending/movie/day?api_key=${apiKey}`;
  
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
