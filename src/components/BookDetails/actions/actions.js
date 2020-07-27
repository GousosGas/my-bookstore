import createActionType from '../../../core/helpers/createActionType';
import generateActionCreator from '../../../core/helpers/generateActions';
import { FETCH_BOOK_PREFIX, FETCH_BOOK_TYPE, SET_BOOK_TYPE } from '../consts/constants';

/**
* Action Types
* @type {string}
*/
export const FETCH_BOOK = createActionType(FETCH_BOOK_PREFIX, FETCH_BOOK_TYPE);
export const SET_BOOK = createActionType(FETCH_BOOK_PREFIX, SET_BOOK_TYPE);
/**
 * Action Creators
 * @type {Function}
 */
export const fetchBookResultsAction = generateActionCreator(FETCH_BOOK, 'payload');
export const setBookResultsAction = generateActionCreator(SET_BOOK, 'payload');
