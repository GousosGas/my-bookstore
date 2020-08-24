import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as PropTypes from 'prop-types';
import BookCard from '../../BookResults/views/BookCard';
import styles from './BookSearchResults.module.scss';

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
    className={styles.BookResultContainer}
  >
    { search.length > 0 && search.map((book) => {
      const { id, volumeInfo } = book;
      return (
        <Grid item xs={12} sm={6} md={4}>
          <BookCard
            id={id}
            authors={volumeInfo.authors}
            title={volumeInfo.title}
            publisher={volumeInfo.publisher}
            publishedDate={volumeInfo.publishedDate}
            imageLinks={volumeInfo.imageLinks}
            rating={volumeInfo.ratingsCount}
          />
        </Grid>
      );
    })}
  </Grid>
);

BookSearchResults.defaultProps = {
  search: [],
};
BookSearchResults.propTypes = {
  search: PropTypes.shape,
};

export default BookSearchResults;
