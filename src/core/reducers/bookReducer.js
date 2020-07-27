import createReducer from '../helpers/createReducer';
import { SET_BOOK_RESULTS } from '../actions/coreActions';

/**
 * Core reducer responsible for handling related exents
 * @type {reducer}
 */
export const booksReducer = createReducer([], {
  [SET_BOOK_RESULTS]: (state, action) => ([...state, ...action.payload]),
});
