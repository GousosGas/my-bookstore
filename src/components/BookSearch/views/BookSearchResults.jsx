import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as PropTypes from 'prop-types';
import BookCard from '../../BookResults/views/BookCard';

/**
 * Component that renders
 * a grid section with all the availble books
 * @param books the available books
 */
const BookSearchResults = ({ search }) => (
  <Grid
    container
    spacing={2}
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
  >
    { search.map((book) => (
      <Grid item xs={12} sm={6} md={3}>
        <BookCard
          author={book.author}
          title={book.title}
        />
      </Grid>
    ))}
  </Grid>
);

BookSearchResults.defaultProps = {
  search: [],
};
BookSearchResults.propTypes = {
  search: PropTypes.shape,
};

export default BookSearchResults;
