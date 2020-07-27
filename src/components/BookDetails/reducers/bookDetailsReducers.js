import { Map } from 'immutable';
import createReducer from '../../../core/helpers/createReducer';
import { SET_BOOK } from '../actions/actions';
import { BOOK_RESULT } from '../consts/constants';

/**
 * Reducer responsible for handling the data
 * of book details
 * @see SET_BOOK
 * @type {reducer}
 */
export const bookDetailsReducers = createReducer(Map(), {
  [SET_BOOK]: (state, action) => (state.setIn([BOOK_RESULT], action.payload)),
});
