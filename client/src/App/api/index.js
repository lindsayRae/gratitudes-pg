const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const QUOTES_URL = 'https://zenquotes.io/api/today';

/**
 * Retrieves the quote of the day
 * Uses proxy to avaoi CORS issue
 */
export const getQuote = async () => {
  const res = await fetch(PROXY_URL + QUOTES_URL);
  const data = await res.json();
  return data;
};
