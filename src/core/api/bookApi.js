import axios from 'axios';

const url = 'https://www.googleapis.com/books/v1/volumes';
const key = 'AIzaSyAaWC9sXP0i0-oUEhOwe_lYO9BR6H_N48Q';

/**
 * Function used to search books in Google Book API
 * @returns {*}
 */
export const searchBooks = (query) => axios.get(url, {
  params: {
    q: decodeURIComponent(query),
    key,
  },
});

export const getBook = (id) => axios.get(`${url}/${id}`);
