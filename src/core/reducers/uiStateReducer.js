import { Map } from 'immutable';
import createReducer from '../helpers/createReducer';
import { RESULTS_FOUND, SHOW_ADVANCED_FILTERS } from '../../components/BookSearch/actions/BookSearchActions';
import { SET_LOADING, SET_NETWORK_ERROR } from '../actions/coreActions';
import {
  ERROR, LOADING, RESULT_FOUND, SHOW_FILTERS,
} from '../common/constants';

const initState = Map()
  .setIn([RESULT_FOUND], null)
  .setIn([LOADING], null)
  .setIn([ERROR], null)
  .setIn([SHOW_FILTERS], false);

/**
 * Core reducer responsible for handling uiState
 * @type {reducer}
 */
// eslint-disable-next-line import/prefer-default-export
export const uiStateReducer = createReducer(initState, {
  [RESULTS_FOUND]: (state, action) => (state.setIn([RESULT_FOUND], action.payload)),
  [SET_LOADING]: (state, action) => (state.setIn([LOADING], action.payload)),
  [SET_NETWORK_ERROR]: (state, action) => (state.setIn([ERROR], action.payload)),
  [SHOW_ADVANCED_FILTERS]:
      (state) => (state.setIn([SHOW_FILTERS], !initState.get(SHOW_FILTERS))),
});
