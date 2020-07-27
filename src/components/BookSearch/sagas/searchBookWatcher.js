import { takeLatest } from 'redux-saga/effects';
import searchBookSaga from './searchBookSaga';
import { BOOK_FILTER_RESULTS } from '../actions/BookSearchActions';

export function* searchBookWatcher() {
  yield takeLatest(BOOK_FILTER_RESULTS, searchBookSaga);
}
