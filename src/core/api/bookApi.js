import axios from 'axios';

/**
 * Function used to have calls to
 * the book.json file
 * @returns {*}
 */
export const getBooks = () => axios.get('book.json');
