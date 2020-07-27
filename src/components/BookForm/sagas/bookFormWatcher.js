import { takeLatest } from 'redux-saga/effects';
import { BOOK_CREATE } from '../actions/BookFormActions';
import bookCreateSaga from './bookCreateSaga';

/**
 * Saga Watcher the listens to
 * @see BOOK_CREATE action
 * @returns {IterableIterator<ForkEffect>}
 */
export function* bookFormWatcher() {
  yield takeLatest(BOOK_CREATE, bookCreateSaga);
}
