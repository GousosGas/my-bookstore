import {
  call,
  put,
} from 'redux-saga/effects';
import { fetchBestSellerBooks } from '../../../core/api/bookApi';
import { setLoading, setNetworkError } from '../../../core/actions/coreActions';
import { setBestSellerBooksAction } from '../actions/BookSearchActions';

/**
 * Saga for handling the effects
 * of a fetching best seller books
 * @param action
 * @returns {IterableIterator<*|PutEffect<{type}>|ChannelPutEffect<any>|*|SelectEffect>}
 */
export default function* fetchBestSellerBooksSaga() {
  try {
    yield put(setLoading(true));
    yield put(setNetworkError(false));
    const { data } = yield call(fetchBestSellerBooks);
    yield put(setBestSellerBooksAction(data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setNetworkError(true));
  }
}
