import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './BookForm.module.scss';
import { validate } from '../../components/BookForm/common/utils';
import { BookMultipleSelect, BookTextField, BookTextFieldArea } from '../../core/FormFields/BookTextField';
import { CATEGORIES } from '../../components/BookForm/common/constants';
import BookTitleSection from '../../components/BookForm/views/BookTitleSection';
import { createBookAction } from '../../components/BookForm/actions/BookFormActions';

/**
 * Component Responsible for rendering
 * the Book Form Page
 * This is the form where a user
 * can insert a book record
 * @param handleSubmit function responsive for handling the submission
 * @param onSubmit helper function for handling data
 */
const BookFormPage = ({ handleSubmit, onSubmit }) => (
  <Container maxWidth="md">
    <BookTitleSection />
    <Paper className={styles.FormContainerClass}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1} className={styles.GridPadding}>
          <Grid item md={4} xs={12}>
            <Field
              className={styles.TextFieldWidth}
              name="title"
              label="Title"
              component={BookTextField}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <Field
              className={styles.TextFieldWidth}
              name="author"
              label="Author Name"
              component={BookTextField}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <Field
              className={styles.TextFieldWidth}
              name="categories"
              label="Categories"
              categories={CATEGORIES}
              component={BookMultipleSelect}
            />
          </Grid>
        </Grid>
        <div className={styles.GridPadding}>
          <Field
            name="description"
            label="Description"
            component={BookTextFieldArea}
          />
        </div>
        <Grid container spacing={1} className={styles.GridPadding}>
          <Grid item md={4} xs={12}>
            <Field
              className={styles.TextFieldWidth}
              name="publisher"
              label="Publisher"
              component={BookTextField}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <Field
              className={styles.TextFieldWidth}
              name="year"
              label="Year"
              component={BookTextField}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <Field
              className={styles.TextFieldWidth}
              name="pageNumbers"
              label="Page Numbers"
              component={BookTextField}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} className={styles.GridPadding}>
          <Grid item xs>
            <Field
              className={styles.TextFieldWidth}
              name="isbn10"
              label="ISBN-10"
              component={BookTextField}
            />
          </Grid>
          <Grid item xs>
            <Field
              className={styles.TextFieldWidth}
              name="isbn13"
              label="ISBN-13"
              component={BookTextField}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} className={styles.GridPadding}>
          <Grid item xs>
            <Button
              fullWidth
              type="submit"
              variant="outlined"
              color="primary"
            >
              Create
            </Button>
          </Grid>
          <Grid item xs>
            <Link to="/">
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
              >
                Cancel
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Paper>
  </Container>
);

BookFormPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export const mapDispatchToProps = (dispatch) => ({
  onSubmit: (formValues) => {
    dispatch(createBookAction(formValues));
  },
});

const BookSearchForm = reduxForm({
  form: 'createBookForm',
  validate,
})(BookFormPage);

export default connect(null, mapDispatchToProps)(BookSearchForm);
