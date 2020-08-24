import React from 'react';
import { Field } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import styles from './BookAdvancedSearch.module.scss';
import SearchField from '../../../core/FormFields/SearchField';

/**
 * Compnenta that renders a redux form
 * used for Advanced Search functionality in the list of the books
 * @param handleSubmit submit function
 * @param searchItem helper submit function
 * @param loading indicator that handles the loading icon
 * @returns {*}
 * @constructor
 */
const BookAdvancedSearch = () => (
  <div className={styles.BookAdvancedSearchContainer}>
    <Grid container spacing={1} alignItems="baseline">
      <Grid item md={3} xs={12}>
        <Field
          name="title"
          label="Title"
          component={SearchField}
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <Field
          name="author"
          label="Author"
          component={SearchField}
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <Field
          name="publisher"
          label="Publisher"
          component={SearchField}
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <Field
          name="isbn"
          label="ISBN"
          component={SearchField}
        />
      </Grid>
    </Grid>
  </div>
);

export default BookAdvancedSearch;
