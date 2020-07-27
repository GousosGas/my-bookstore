import { Map } from 'immutable';
import createReducer from '../helpers/createReducer';
import { RESULTS_FOUND } from '../../components/BookSearch/actions/BookSearchActions';
import { SET_LOADING } from '../actions/coreActions';
import { LOADING, RESULT_FOUND } from '../common/constants';

const initState = Map()
  .setIn(['resultsFound'], null)
  .setIn(['loading'], null);

/**
 * Core reducer responsible for handling uiState
 * @type {reducer}
 */
export const uiStateReducer = createReducer(initState, {
  [RESULTS_FOUND]: (state, action) => (state.setIn([RESULT_FOUND], action.payload)),
  [SET_LOADING]: (state, action) => (state.setIn([LOADING], action.payload)),
});
