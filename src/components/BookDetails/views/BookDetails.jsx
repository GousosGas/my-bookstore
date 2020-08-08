import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import BookImageContainer from '../../BookImageContainer/BookImageContainer';
import styles from './BookDetails.module.scss';
import { EMPTY_STRING } from '../../../core/common/constants';
import BookDetailsTextSection from './BookDetailsTextSection';

/**
 * Component responsible of rendering
 * the BookDetail Section
 * @param title the title of a book
 * @param description the description of a book
 * @param subtitle the subtitle of a book
 * @see BookImageContainer
 * @see BookDetailsTextSection
 * @returns {*}
 * @constructor
 */
const BookDetails = ({
  title, description, imageLinks, publishedDate, publisher, pageCount, authors, ratingsCount,
}) => (
  <>
    <Grid container spacing={0} className={styles.CardClass}>
      <Grid item xs={12} md={6}>
        <BookImageContainer
          title={title}
          image={imageLinks}
          authors={authors}
          publishedDate={publishedDate || 'N/A'}
          publisher={publisher || 'N/A'}
          pageCount={pageCount || 'N/A'}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BookDetailsTextSection
          title={title}
          description={description}
          authors={authors}
          ratingsCount={ratingsCount}
        />
      </Grid>
    </Grid>
  </>
);

BookDetails.defaultProps = {
  title: EMPTY_STRING,
  description: EMPTY_STRING,
  imageLinks: EMPTY_STRING,
  publishedDate: EMPTY_STRING,
  publisher: EMPTY_STRING,
  pageCount: EMPTY_STRING,
  authors: EMPTY_STRING,
  ratingsCount: 0,
};

BookDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageLinks: PropTypes.string,
  publishedDate: PropTypes.string,
  publisher: PropTypes.string,
  pageCount: PropTypes.string,
  authors: PropTypes.string,
  ratingsCount: PropTypes.number,
};

export default BookDetails;
