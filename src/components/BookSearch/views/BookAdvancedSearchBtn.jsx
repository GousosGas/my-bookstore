import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './BookSearch.module.scss';
import { uiStateShowAdvancedFilters } from '../actions/BookSearchActions';

/**
 * Button that render the search filter
 * fields
 * @returns {*}
 * @constructor
 */
const BookAdvancedSearchBtn = ({ onShow }) => (
  <Button
    onClick={onShow}
    color="primary"
    className={styles.AdvancedSearchClass}
  >
    Search Filters
  </Button>
);

BookAdvancedSearchBtn.propTypes = {
  onShow: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onShow: () => {
    dispatch(uiStateShowAdvancedFilters());
  },
});

export default connect(null, mapDispatchToProps)(BookAdvancedSearchBtn);
