import {
  call,
  put,
} from 'redux-saga/effects';
import { getBooks } from '../api/bookApi';
import { setBooks } from '../actions/coreActions';

/**
 * Saga where hanldes the books
 * that came from the .json mock datat
 * @returns {IterableIterator<CallEffect | *|PutEffect<{type: *}> | ChannelPutEffect<any> | *>}
 */
export default function* fetchBooks() {
  try {
    const { data } = yield call(getBooks);
    yield put(setBooks(data.books));
  } catch (e) {
    console.log(e);
  }
}
