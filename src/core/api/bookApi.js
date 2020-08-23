import axios from 'axios';

/**
 * Urls
 * @type {string}
 */
const bookUrl = 'https://www.googleapis.com/books/v1/volumes';
const bestSellerBookUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
const editorsSelectionBookUrl = 'https://www.googleapis.com/books/v1/volumes';
/**
 * api Keys
 * @type {string}
 */
const googleKey = 'AIzaSyAaWC9sXP0i0-oUEhOwe_lYO9BR6H_N48Q';
const nytKey = 'xQtoQLGps5kc3NIMaGwZJFxRFb6Ye5Pl';

/**
 * Function used to search books in Google Book API
 * used as editors selection book
 * @returns {*}
 */
export const editorSelectionBooks = (id) => axios.get(`${editorsSelectionBookUrl}/${id}`);
/**
 * Function used to search books in Google Book API
 * @returns {*}
 */
export const searchBooks = (query) => axios.get(bookUrl, {
  params: {
    q: decodeURIComponent(query),
    googleKey,
  },
});

/**
 * Function used to fetch best seller books from NYT API
 * @returns {*}
 */
export const fetchBestSellerBooks = () => axios.get(bestSellerBookUrl, {
  params: {
    'api-key': nytKey,
  },
});

export const getBook = (id) => axios.get(`${bookUrl}/${id}`);
