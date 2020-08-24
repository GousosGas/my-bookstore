import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBestSellerBooksAction } from '../actions/BookSearchActions';
import BookSlider from '../../../core/components/BookCarousel/BookCarousel';
import { bestSellersBookSelector } from '../selectors/bestSellerSelectors';

/**
 * Component responsible for rendering the
 * best seller book slider
 * With the hook we make the init call to receive
 * all the necessary data from NYT api
 * @param bestSellerBooks
 * @returns {*}
 * @constructor
 */
const BestSellerComponent = ({ bestSellerBooks }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBestSellerBooksAction());
  }, []);

  return (
    <BookSlider bestSellerBooks={bestSellerBooks} />
  );
};

BestSellerComponent.propTypes = {
  bestSellerBooks: PropTypes.bool.isRequired,
};

export const mapStateToProps = (state) => ({
  bestSellerBooks: bestSellersBookSelector(state),
});

export default connect(mapStateToProps)(BestSellerComponent);
