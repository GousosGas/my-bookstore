import {
  put,
  select,
  call,
} from 'redux-saga/effects';
import {
  clearSearchedBookResultsAction,
  setSearchedBookResultsAction,
  uiStateResultsFoundAction,
} from '../actions/BookSearchActions';
import { booksSelector } from '../../../core/selectors/bookResultSelectors';
import { setLoading } from '../../../core/actions/coreActions';

/**
 * Helper function that checks if
 * the passed object contains a specific prop
 * with specific value
 * @param obj
 * @param key
 * @param value
 * @returns {null}
 */
const hasValue = (obj, key, value) => (obj.hasOwnProperty(key) && obj[key] === value ? obj : null);
const searchResultResolver = (searchBookResult) => searchBookResult.filter((book) => book != null);

/**
 * Helper function that emulates a network call
 * delay
 * @param time the ms to wait till next execution
 * @returns {Promise<any>}
 */
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

/** *
 *
 * @param data
 * @param formData
 * @returns {*}
 */
const filterBookResolver = (books, formData) => {
  const bookMatching = books && books.map((book) => (
    hasValue(book, formData.searchCategory, formData.bookSearch)
  ));
  return searchResultResolver(bookMatching);
};

export default function* searchBookSaga(formValues) {
  try {
    yield put(setLoading(true));
    const { payload } = formValues;
    const books = yield select(booksSelector);
    const searchBookResult = filterBookResolver(books, payload);
    if (searchBookResult.length === 0) {
      yield call(delay, 1000);
      yield put(setLoading(false));
      yield put(clearSearchedBookResultsAction());
      yield put(uiStateResultsFoundAction(false));
      return;
    }
    yield put(uiStateResultsFoundAction(true));
    yield call(delay, 1000);
    yield put(setLoading(false));
    yield put(setSearchedBookResultsAction(searchBookResult));
  } catch (e) {
    console.log(e);
  }
}
