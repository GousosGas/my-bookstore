import createActionType from '../helpers/createActionType';
import {
  GET_BOOKS_TYPE, INIT_BOOK_ACTION_PREFIX, LOADING_TYPE, NETWORK_ERROR_TYPE, SET_BOOK_TYPE,
} from '../common/constants';
import generateActionCreator from '../helpers/generateActions';

/**
 * Action Types
 * @type {string}
 */
export const GET_BOOK_RESULTS = createActionType(INIT_BOOK_ACTION_PREFIX, GET_BOOKS_TYPE);
export const SET_BOOK_RESULTS = createActionType(INIT_BOOK_ACTION_PREFIX, SET_BOOK_TYPE);
export const SET_LOADING = createActionType(INIT_BOOK_ACTION_PREFIX, LOADING_TYPE);
export const SET_NETWORK_ERROR = createActionType(INIT_BOOK_ACTION_PREFIX, NETWORK_ERROR_TYPE);

/** *
 * Action Creators
 * @type {function(...[*]): {type: *}}
 */
export const initBookAction = generateActionCreator(GET_BOOK_RESULTS);
export const setBooks = generateActionCreator(SET_BOOK_RESULTS, 'payload');
export const setLoading = generateActionCreator(SET_LOADING, 'payload');
export const setNetworkError = generateActionCreator(SET_NETWORK_ERROR, 'payload');
