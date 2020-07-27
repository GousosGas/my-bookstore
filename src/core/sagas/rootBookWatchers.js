import { takeLatest } from 'redux-saga/effects';
import InitialBookSaga from './InitialBookSaga';
import { GET_BOOK_RESULTS } from '../actions/coreActions';

/**
 * Watcher that listens to
 * @GET_BOOK_RRESULTS
 * @returns {IterableIterator<ForkEffect>}
 */
export function* bookWatcher() {
  yield takeLatest(GET_BOOK_RESULTS, InitialBookSaga);
}
