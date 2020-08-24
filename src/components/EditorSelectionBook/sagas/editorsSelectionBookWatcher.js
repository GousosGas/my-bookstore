import { takeLatest } from 'redux-saga/effects';
import fetchEditosSelectionBookSaga from './fetchEditosSelectionBookSaga';
import { EDITORS_SELECTION_BOOK_RESULTS } from '../actions/editorsSelectionBookActions';

/**
 * Watcher function responsible
 * respond to @see EDITORS_SELECTION_BOOK_RESULTS
 * @returns {IterableIterator<ForkEffect>}
 */
// eslint-disable-next-line import/prefer-default-export
export function* editorsSelectionBookWatcher() {
  yield takeLatest(EDITORS_SELECTION_BOOK_RESULTS, fetchEditosSelectionBookSaga);
}
