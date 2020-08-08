import { all } from 'redux-saga/effects';
import { searchBookWatcher } from '../../components/BookSearch/sagas/searchBookWatcher';
import { bookFormWatcher } from '../../components/BookForm/sagas/bookFormWatcher';
import { bookDetailsWatcher } from '../../components/BookDetails/sagas/bookDetailsWatcher';

/**
 * Root Saga that contains
 * all apps Saga watchers
 * @returns {IterableIterator<AllEffect<*> | *>}
 */
export default function* rootSaga() {
  yield all([
    searchBookWatcher(),
    bookFormWatcher(),
    bookDetailsWatcher(),
  ]);
}
