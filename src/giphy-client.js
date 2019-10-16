import axios from 'axios';

export function searchForGifs(searchTerm, limit = 5) {
  const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/search';
  const MY_GIPHY_API_KEY = 'INSERT YOUR API KEY HERE';

  const searchParams = new URLSearchParams();
  searchParams.set('api_key', MY_GIPHY_API_KEY);
  searchParams.set('q', searchTerm);
  searchParams.set('limit', limit);
  const queryString = searchParams.toString();

  return axios.get(`${GIPHY_API_URL}?${queryString}`);
}
