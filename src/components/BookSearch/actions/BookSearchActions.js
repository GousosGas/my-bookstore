import createActionType from '../../../core/helpers/createActionType';
import {
  BOOK_RESULTS_TYPE,
  BOOK_SEARCH_ACTION_PREFIX,
  CLEAR_BOOK_RESULTS_TYPE,
  RESULTS_FOUND_TYPE,
  SET_BOOK_RESULTS_TYPE,
  SHOW_ADVANCED_FILTERS_TYPE,
} from '../common/constants';
import generateActionCreator from '../../../core/helpers/generateActions';

/**
 * Action Types
 * @type {string}
 */
export const BOOK_FILTER_RESULTS = createActionType(BOOK_SEARCH_ACTION_PREFIX, BOOK_RESULTS_TYPE);
export const SET_BOOK_FILTER_RESULTS = createActionType(BOOK_SEARCH_ACTION_PREFIX, SET_BOOK_RESULTS_TYPE);
export const CLEAR_BOOK_RESULTS = createActionType(BOOK_SEARCH_ACTION_PREFIX, CLEAR_BOOK_RESULTS_TYPE);
export const RESULTS_FOUND = createActionType(BOOK_SEARCH_ACTION_PREFIX, RESULTS_FOUND_TYPE);
export const SHOW_ADVANCED_FILTERS = createActionType(BOOK_SEARCH_ACTION_PREFIX, SHOW_ADVANCED_FILTERS_TYPE);

/**
 * Action Creators
 * @type {Function}
 */
export const searchedBookResultsAction = generateActionCreator(BOOK_FILTER_RESULTS, 'payload');
export const setSearchedBookResultsAction = generateActionCreator(SET_BOOK_FILTER_RESULTS, 'payload');
export const clearSearchedBookResultsAction = generateActionCreator(CLEAR_BOOK_RESULTS);
export const uiStateResultsFoundAction = generateActionCreator(RESULTS_FOUND, 'payload');
export const uiStateShowAdvancedFilters = generateActionCreator(SHOW_ADVANCED_FILTERS, 'payload');
