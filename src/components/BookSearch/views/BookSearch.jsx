import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import SearchField from '../../../core/FormFields/SearchField';
import { clearSearchedBookResultsAction, searchedBookResultsAction } from '../actions/BookSearchActions';
import styles from './BookSearch.module.scss';
import { uiSelectorLoading, uiSelectorShowFilters } from '../../../core/selectors/bookResultSelectors';
import validate from '../common/validate';
import BookAdvancedSearchBtn from './BookAdvancedSearchBtn';
import BookAdvancedSearcForm from './BookAdvancedSearch';

/**
 * Compnenta that renders a redux form
 * used Search functionality in the list of the books
 * @param handleSubmit submit function
 * @param searchItem helper submit function
 * @param loading indicator that handles the loading icon
 * @returns {*}
 * @constructor
 */
const BookSearch = ({ handleSubmit, searchItem, showFilter }) => (
  <div className={styles.BookSearchContainer}>
    <form onSubmit={handleSubmit(searchItem)}>
      <Grid container spacing={2}>
        <Grid item md={9} xs={12}>
          <Field
            name="search"
            label="Search"
            component={SearchField}
          />
        </Grid>
        <Grid item md={3} xs={12} alignItems="baseline">
          <BookAdvancedSearchBtn />
        </Grid>
        {showFilter
          ? <BookAdvancedSearcForm /> : null}
      </Grid>
      <div className={styles.ButtonContainer}>
        <Button
          type="submit"
          size="large"
          variant="outlined"
          endIcon={<Icon>send</Icon>}
          color="primary"
        >
          Search a Book
        </Button>
      </div>
    </form>
  </div>

);

BookSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchItem: PropTypes.shape.isRequired,
  showFilter: PropTypes.string.isRequired,
};

const BookSearchForm = reduxForm({
  form: 'bookSearchForm',
  validate,
})(BookSearch);

export const mapDispatchToProps = (dispatch) => ({
  searchItem: (formValues) => {
    dispatch(clearSearchedBookResultsAction());
    dispatch(searchedBookResultsAction(formValues));
  },
});

export const mapStateToProps = (state) => ({
  loading: uiSelectorLoading(state),
  showFilter: uiSelectorShowFilters(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookSearchForm);
