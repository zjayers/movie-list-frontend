import axios from 'axios';

const fetchMovies = async (searchTerm) => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/');
  // If there is no data on the response, return an empty array
  if (!response.data.data) {
    return [];
  }
  // Returns an array of fetched movies
  return response.data.data;
};

export default fetchMovies;
