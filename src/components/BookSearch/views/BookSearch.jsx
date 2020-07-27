import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';
import SearchField from '../../../core/FormFields/SearchField';
import { searchedBookResultsAction } from '../actions/BookSearchActions';
import styles from './BookSearch.module.scss';
import SearchCategoryField from '../../../core/FormFields/SearchCategoryField';
import { uiSelector } from '../../../core/selectors/bookResultSelectors';

/**
 * Compnenta that renders a redux form
 * used Search functionality in the list of the books
 * @param handleSubmit submit function
 * @param searchItem helper submit function
 * @param loading indicator that handles the loading icon
 * @returns {*}
 * @constructor
 */
const BookSearch = ({ handleSubmit, searchItem, loading }) => (
  <form onSubmit={handleSubmit(searchItem)}>
    <Grid container spacing={2}>
      <Grid item md={10} xs={12}>
        <Field
          name="bookSearch"
          component={SearchField}
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <Field
          name="searchCategory"
          component={SearchCategoryField}
        />
      </Grid>
    </Grid>
    <div className={styles.ButtonContainer}>
      <Box component="div" display="inline">
        <Button
          type="submit"
          size="large"
          variant="outlined"
          endIcon={<Icon>send</Icon>}
          color="primary"
        >
          Search a Book
        </Button>
      </Box>
      {loading
        ? (
          <Box component="div" display="inline">
            <CircularProgress className={styles.Spinner} />
          </Box>
        ) : null}
    </div>
    <div className={styles.ButtonContainer}>
      -OR-
    </div>
    <div className={styles.ButtonContainer}>
      <Button
        size="large"
        variant="outlined"
        endIcon={<Icon>save</Icon>}
        color="secondary"
      >
        Create a Book
      </Button>
    </div>
  </form>
);

BookSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchItem: PropTypes.shape.isRequired,
  loading: PropTypes.bool.isRequired,
};

/**
 * The validate rules
 * of @see BookSearchForm components
 * @param formValues the values of the form
 */
const validate = (formValues) => {
  const errors = {};
  if (!formValues.bookSearch) {
    errors.bookSearch = 'You must enter an author or publisher ';
  }
  if (!formValues.searchCategory) {
    errors.searchCategory = 'You must select a search filter ';
  }
  return errors;
};

const BookSearchForm = reduxForm({
  form: 'bookSearchForm',
  validate,
})(BookSearch);

export const mapDispatchToProps = (dispatch) => ({
  searchItem: (formValues) => {
    dispatch(searchedBookResultsAction(formValues));
  },
});

export const mapStateToProps = (state) => ({
  loading: uiSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookSearchForm);
