import { all } from 'redux-saga/effects';
import { searchBookWatcher } from '../../components/BookSearch/sagas/searchBookWatcher';
import { bookFormWatcher } from '../../components/BookForm/sagas/bookFormWatcher';
import { bookDetailsWatcher } from '../../components/BookDetails/sagas/bookDetailsWatcher';
import { bestSellerBooksWatcher } from '../../components/BestSeller/sagas/bestSellerBooksWatcher';
import { editorsSelectionBookWatcher } from '../../components/EditorSelectionBook/sagas/editorsSelectionBookWatcher';

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
    bestSellerBooksWatcher(),
    editorsSelectionBookWatcher(),
  ]);
}
