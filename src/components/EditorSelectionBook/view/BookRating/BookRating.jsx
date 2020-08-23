import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating/Rating';
import styles from './BookRating.module.scss';

/**
 * Component responsible to render the
 * rating of the editors choice book card
 * @param rating
 * @returns {*}
 * @constructor
 */
const BookRating = ({ rating }) => (
  <div className={styles.RatingContainerClass}>
    <Rating
      name="read-only"
      value={rating || 0}
      size="small"
      readOnly
    />
  </div>
);

BookRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default BookRating;
