import createReducer from '../../../core/helpers/createReducer';
import { SET_SELECTION_BOOK_RESULTS } from '../actions/editorsSelectionBookActions';
/**
 * Reducer responsible for handling the data
 * of editors selection book section
 * @see SET_BOOK
 * @type {reducer}
 */
// eslint-disable-next-line import/prefer-default-export
export const editorsSelectionBookReducers = createReducer([], {
  // eslint-disable-next-line max-len
  [SET_SELECTION_BOOK_RESULTS]: (state, action) => ([...state, action.payload]),
});
