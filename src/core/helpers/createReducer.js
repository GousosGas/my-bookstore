/**
 * Cre function that creates a
 * reducer function
 * @param initialState
 * @param handlers
 * @returns {reducer}
 */
export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
