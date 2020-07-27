import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { booksReducer } from './bookReducer';
import { bookSearchReducer } from '../../components/BookSearch/reducers/bookSearchReducer';
import { uiStateReducer } from './uiStateReducer';
import { bookDetailsReducers } from '../../components/BookDetails/reducers/bookDetailsReducers';

/**
 * it combines alla apps reducers
 */
export default combineReducers({
  form: formReducer,
  books: booksReducer,
  search: bookSearchReducer,
  uiState: uiStateReducer,
  book: bookDetailsReducers,
});
