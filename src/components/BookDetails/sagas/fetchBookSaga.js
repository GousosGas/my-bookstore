import {
  put,
  select,
} from 'redux-saga/effects';
import { booksSelector } from '../../../core/selectors/bookResultSelectors';
import { setBookResultsAction } from '../actions/actions';

/**
 * Helper function that resolves and "clear"
 * the provided array from null values
 * @param searchBookResult array of books
 * @returns {*}
 */
const searchResultResolver = (searchBookResult) => searchBookResult.filter((book) => book != null);

/**
 * Helper function for filtering a book
 * It receives a list of books
 * and it finds the selected one
 * @param books list of book
 * @param payload the selected book
 * @returns {*}
 */
const filterBook = (books, payload) => {
  const result = books && books.map((book) => (
    Object.values(book).includes(payload) ? book : null
  ));
  return result;
};

/**
 * Saga for handling the effects
 * of a book selection
 * @param action
 * @returns {IterableIterator<*|PutEffect<{type}>|ChannelPutEffect<any>|*|SelectEffect>}
 */
export default function* fetchBookSaga(action) {
  try {
    const books = yield select(booksSelector);
    const bookResult = filterBook(books, action.payload);
    const book = searchResultResolver(bookResult);
    yield put(setBookResultsAction(book[0]));
  } catch (e) {
    console.log(e);
  }
}
