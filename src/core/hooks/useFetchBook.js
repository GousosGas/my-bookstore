import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

/**
 * Custom hook that dispatches an action
 * to a saga for fetching a book
 * @param actionCreator the action to dispatch
 * @param id the id of a book
 */
const useFetchBook = (actionCreator, id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreator(id));
  }, []);
};

export default useFetchBook;
