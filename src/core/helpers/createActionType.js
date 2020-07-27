/**
 * Core function that generates an action with
 * a preffix
 * @param prefix the definde prefix
 * @param action the action passed
 * @returns {string}
 */
const createActionType = (prefix, action) => `@@${prefix}/${action}`;
export default createActionType;
