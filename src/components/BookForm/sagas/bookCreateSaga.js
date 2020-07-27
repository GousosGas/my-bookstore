import {
  put,
} from 'redux-saga/effects';
import { setLoading } from '../../../core/actions/coreActions';

/**
 * Saga responsible for handling the
 * creation of a book
 * Since we dont have an api yet
 * it alerts the provided form
 * values to an alert box
 * @param formValues the values passed form the form
 * @returns {IterableIterator<PutEffect<{type}> | ChannelPutEffect<any> | *>}
 */
export default function* createBookSaga(formValues) {
  try {
    yield put(setLoading(true));
    const { payload } = formValues;
    // eslint-disable-next-line no-undef
    alert(JSON.stringify(payload, null, 4));
    yield put(setLoading(false));
  } catch (e) {
    console.log(e);
  }
}
