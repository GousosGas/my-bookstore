import { takeLatest } from 'redux-saga/effects';
import fetchBestSellerBooksSaga from './fetchBestSellerBooksSaga';
import { BEST_SELLERS_BOOK_RESULTS } from '../actions/BookSearchActions';

/**
 * Watcher function responsible to
 * respond to @see BEST_SELLERS_BOOK_RESULTS
 * @returns {IterableIterator<ForkEffect>}
 */
// eslint-disable-next-line import/prefer-default-export
export function* bestSellerBooksWatcher() {
  yield takeLatest(BEST_SELLERS_BOOK_RESULTS, fetchBestSellerBooksSaga);
}
