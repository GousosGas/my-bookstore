import { LOADING, SHOW_FILTERS } from '../common/constants';
import { BOOK_RESULT } from '../../components/BookDetails/consts/constants';
/**
 * Selectors hanlde slices of the redux state
 * @param state
 */
export const searchSelector = (state) => state.search;
export const resultsFoundSelector = (state) => state.uiState;
export const uiSelectorLoading = (state) => state.uiState.getIn([LOADING]);
export const uiSelectorShowFilters = (state) => state.uiState.getIn([SHOW_FILTERS]);
export const bookSelector = (state) => state.book.getIn([BOOK_RESULT]);
