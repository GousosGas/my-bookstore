import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as PropTypes from 'prop-types';
import BookCard from './BookCard';

/**
 * Component that renders
 * a grid section with all the available books
 * @param books the available books
 */
const BookResults = ({ books }) => (
  <Grid
    container
    spacing={2}
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
  >
    {books
      ? books.map((book) => (
        <Grid item xs={12} sm={6} md={3}>
          <BookCard
            author={book.author}
            description={book.description}
            isbn={book.isbn}
            title={book.title}
            publisher={book.publisher}
          />
        </Grid>
      )) : null}
  </Grid>

);

BookResults.defaultProps = {
  books: [],
};
BookResults.propTypes = {
  books: PropTypes.shape,
};

export default BookResults;
