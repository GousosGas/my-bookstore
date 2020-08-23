import createActionType from '../../../core/helpers/createActionType';
import generateActionCreator from '../../../core/helpers/generateActions';
import {
  EDITORS_SELECTION_BOOK_PREFIX,
  FETCH_EDITORS_SELECTION_BOOK_TYPE,
  SET_EDITORS_SELECTION_BOOK_TYPE,
} from '../common/constants';

/**
 * Action Types
 * @type {string}
 */
// eslint-disable-next-line max-len
export const EDITORS_SELECTION_BOOK_RESULTS = createActionType(EDITORS_SELECTION_BOOK_PREFIX, FETCH_EDITORS_SELECTION_BOOK_TYPE);
export const SET_SELECTION_BOOK_RESULTS = createActionType(EDITORS_SELECTION_BOOK_PREFIX, SET_EDITORS_SELECTION_BOOK_TYPE);

/**
 * Action Creators
 * @type {Function}
 */
export const fetchEditorsSelectionBookAction = generateActionCreator(EDITORS_SELECTION_BOOK_RESULTS,'payload');
export const setEditorsSelectionBookAction = generateActionCreator(SET_SELECTION_BOOK_RESULTS, 'payload');
