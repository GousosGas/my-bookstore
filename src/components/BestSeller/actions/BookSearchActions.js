import createActionType from '../../../core/helpers/createActionType';
import generateActionCreator from '../../../core/helpers/generateActions';
import {
  BEST_SELLER_BOOK_PREFIX,
  FETCH_BEST_SELLER_BOOK_TYPE,
  SET_BEST_SELLER_BOOK_TYPE,
} from '../common/constants';

/**
 * Action Types
 * @type {string}
 */
// eslint-disable-next-line max-len
export const BEST_SELLERS_BOOK_RESULTS = createActionType(BEST_SELLER_BOOK_PREFIX, FETCH_BEST_SELLER_BOOK_TYPE);
export const SET_BEST_SELLERS_BOOK_RESULTS = createActionType(BEST_SELLER_BOOK_PREFIX, SET_BEST_SELLER_BOOK_TYPE);

/**
 * Action Creators
 * @type {Function}
 */
export const fetchBestSellerBooksAction = generateActionCreator(BEST_SELLERS_BOOK_RESULTS);
export const setBestSellerBooksAction = generateActionCreator(SET_BEST_SELLERS_BOOK_RESULTS, 'payload');
