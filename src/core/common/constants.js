/**
 * Constants used to create actions
 * @type {string}
 */
export const INIT_BOOK_ACTION_PREFIX = 'init';
export const GET_BOOKS_TYPE = 'get-books';
export const SET_BOOK_TYPE = 'set-books';
export const LOADING_TYPE = 'set-loading';
export const NETWORK_ERROR_TYPE = 'set-network-error';

export const LOADING = 'loading';
export const RESULT_FOUND = 'resultsFound';
export const ERROR = 'error';
export const SHOW_FILTERS = 'showFilters';

/**
 * Core hepler constants
 * @type {string}
 */
export const EMPTY_STRING = '';
export const EMPTY_OBJECT = {};
export const EMPTY_ARRAY = [];

/**
 * Consts that describes filters
 * @type {string}
 */
export const TITLE = 'title';
export const AUTHOR = 'author';
export const PUBLISHED_DATE = 'publishedDate';
export const PUBLISHER = 'publisher';
export const ISBN = 'isbn';

/**
 * Array of book filters
 * @type {string[]}
 */
export const BOOK_FILTER = [
  TITLE,
  AUTHOR,
  PUBLISHED_DATE,
  PUBLISHER,
  ISBN,
];
