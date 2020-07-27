import createActionType from '../../../core/helpers/createActionType';
import { BOOK_CREATE_TYPE, BOOK_SUBMIT_PREFIX } from '../common/constants';
import generateActionCreator from '../../../core/helpers/generateActions';

/**
 * Action Types
 * @type {string}
 */
export const BOOK_CREATE = createActionType(BOOK_SUBMIT_PREFIX, BOOK_CREATE_TYPE);

/**
 * Action Creators
 * @type {Function}
 */
export const createBookAction = generateActionCreator(BOOK_CREATE, 'payload');
