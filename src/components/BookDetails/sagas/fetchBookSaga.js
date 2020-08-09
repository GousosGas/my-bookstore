import {
  call,
  put,
} from 'redux-saga/effects';
import { getBook } from '../../../core/api/bookApi';
import { setBookResultsAction } from '../actions/actions';
import {setLoading, setNetworkError} from '../../../core/actions/coreActions';

/**
 * Saga for handling the effects
 * of a book selection
 * @param action
 * @returns {IterableIterator<*|PutEffect<{type}>|ChannelPutEffect<any>|*|SelectEffect>}
 */
export default function* fetchBookSaga(action) {
  try {
    yield put(setLoading(true));
    yield put(setNetworkError(false));
    const { data } = yield call(getBook, action.payload);
    yield put(setBookResultsAction(data.volumeInfo));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setNetworkError(true));
  }
}
