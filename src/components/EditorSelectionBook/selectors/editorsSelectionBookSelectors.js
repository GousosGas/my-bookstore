import {EMPTY_ARRAY } from '../../../core/common/constants';

/** *
 * Editor selection book selectors
 * @param state
 * @returns {any}
 */
// eslint-disable-next-line import/prefer-default-export,max-len
export const editorsSelectionBookSelector = (state) => state.editorsSelection || EMPTY_ARRAY;
