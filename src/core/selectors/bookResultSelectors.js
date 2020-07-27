import { LOADING } from '../common/constants';
import { BOOK_RESULT } from '../../components/BookDetails/consts/constants';

/**
 * Selectors hanlde slices of the redux state
 * @param state
 * @returns {Array|*|reducer|(<P extends ValidationMap<any>>(type: P) => Requireable<InferProps<P>>)}
 */
export const booksSelector = (state) => state.books;
export const searchSelector = (state) => state.search;
export const resultsFoundSelector = (state) => state.uiState;
export const uiSelector = (state) => state.uiState.getIn([LOADING]);
export const bookSelector = (state) => state.book.getIn([BOOK_RESULT]);
