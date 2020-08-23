import { Map } from 'immutable';
import createReducer from '../../../core/helpers/createReducer';
import { BEST_SELLERS } from '../common/constants';
import { SET_BEST_SELLERS_BOOK_RESULTS } from '../actions/BookSearchActions';
/**
 * Reducer responsible for handling the data
 * of best seller books
 * @see SET_BEST_SELLERS_BOOK_RESULTS
 * @type {reducer}
 */
// eslint-disable-next-line import/prefer-default-export
export const bestSellersBookReducers = createReducer(Map(), {
  // eslint-disable-next-line max-len
  [SET_BEST_SELLERS_BOOK_RESULTS]: (state, action) => (state.set(BEST_SELLERS, action.payload)),
});
