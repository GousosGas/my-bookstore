import {CLEAR_BOOK_RESULTS, SET_BOOK_FILTER_RESULTS} from '../actions/BookSearchActions';
import createReducer from '../../../core/helpers/createReducer';

export const bookSearchReducer = createReducer([], {
  [SET_BOOK_FILTER_RESULTS]: (state, action) => ([...state, ...action.payload]),
  [CLEAR_BOOK_RESULTS]: () => ([]),
});
