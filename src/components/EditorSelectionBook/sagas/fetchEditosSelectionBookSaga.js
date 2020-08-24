import {
  call,
  put,
} from 'redux-saga/effects';
import { editorSelectionBooks } from '../../../core/api/bookApi';
import { setLoading, setNetworkError } from '../../../core/actions/coreActions';
import { setEditorsSelectionBookAction } from '../actions/editorsSelectionBookActions';

/**
 * Saga for handling the effects
 * of a book selection
 * @param action
 * @returns {IterableIterator<*|PutEffect<{type}>|ChannelPutEffect<any>|*|SelectEffect>}
 */
export default function* fetchEditosSelectionBookSaga(action) {
  try {
    yield put(setLoading(true));
    yield put(setNetworkError(false));
    const book1 = yield call(editorSelectionBooks, action.payload[0]);
    yield put(setEditorsSelectionBookAction(book1.data));
    const book2 = yield call(editorSelectionBooks, action.payload[1]);
    yield put(setEditorsSelectionBookAction(book2.data));
    const book3 = yield call(editorSelectionBooks, action.payload[2]);
    yield put(setEditorsSelectionBookAction(book3.data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setNetworkError(true));
  }
}
