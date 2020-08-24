import {
  put,
  call,
} from 'redux-saga/effects';
import { setLoading, setNetworkError } from '../../../core/actions/coreActions';
import { searchBooks } from '../../../core/api/bookApi';
import {
  setSearchedBookResultsAction,
  uiStateResultsFoundAction,
} from '../actions/BookSearchActions';

/**
 * Helper function that creates the payload
 * for the request body
 * @param payload the values of the search form
 */
export const bodyResolver = (payload) => {
  const emptyList = [];
  if (payload.search) {
    const trimmedTitle = payload.search.trim();
    emptyList.push(trimmedTitle);
  }
  if (payload.author) {
    const trimmedAuthor = payload.author.trim();
    emptyList.push(`inauthor:${trimmedAuthor}`);
  }
  if (payload.publisher) {
    const trimmedPublisher = payload.publisher.trim();
    emptyList.push(`inpublisher:${trimmedPublisher}`);
  }
  if (payload.isbn) {
    const trimmedIsbn = payload.isbn.trim();
    emptyList.push(`isbn:${trimmedIsbn}`);
  }
  return emptyList.join('+');
};

export default function* searchBookSaga(formValues) {
  try {
    yield put(setLoading(true));
    const { payload } = formValues;
    const { data } = yield call(searchBooks, bodyResolver(payload));
    yield put(setNetworkError(false));
    if (data.totalItems > 0) {
      yield put(setSearchedBookResultsAction(data.items));
      yield put(uiStateResultsFoundAction(true));
    } else {
      yield put(uiStateResultsFoundAction(false));
    }
    yield put(setLoading(false));
  } catch (e) {
    yield put(setNetworkError(false));
  }
}
