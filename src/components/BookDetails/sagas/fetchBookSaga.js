import {
  call,
  put,
} from 'redux-saga/effects';
import { getBook } from '../../../core/api/bookApi';
import { setBookResultsAction } from '../actions/actions';

/**
 * Saga for handling the effects
 * of a book selection
 * @param action
 * @returns {IterableIterator<*|PutEffect<{type}>|ChannelPutEffect<any>|*|SelectEffect>}
 */
export default function* fetchBookSaga(action) {
  try {
    const { data } = yield call(getBook, action.payload);
    yield put(setBookResultsAction(data.volumeInfo));
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
