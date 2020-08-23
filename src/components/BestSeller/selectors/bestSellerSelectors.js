import { EMPTY_ARRAY } from '../../../core/common/constants';
import { BEST_SELLERS, RESULTS } from '../common/constants';

/** *
 * best seller books selectors
 * @param state
 * @returns {any}
 */
// eslint-disable-next-line import/prefer-default-export,max-len
export const bestSellersBookSelector = (state) => state.bestSellersBooks.getIn([BEST_SELLERS, RESULTS]) || EMPTY_ARRAY;
