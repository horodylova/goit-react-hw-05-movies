import axios from 'axios';
import { config } from './config';

const { apiKey, baseUrl } = config;

export const searchMovies = async () => {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}`;
  
  try {
    const response = await axios.get(url);
    return response.data;
    
  } catch (error) {
    throw error;
  }
};
