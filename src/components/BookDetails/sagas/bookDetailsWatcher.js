import { takeLatest } from 'redux-saga/effects';
import { FETCH_BOOK } from '../actions/actions';
import fetchBookSaga from './fetchBookSaga';

/**
 * Watcher function responsible
 * respond to @see FETCH_BOOK
 * @returns {IterableIterator<ForkEffect>}
 */
export function* bookDetailsWatcher() {
  yield takeLatest(FETCH_BOOK, fetchBookSaga);
}
