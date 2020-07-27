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
const BookDetails = ({ title, description, subtitle }) => (
  <>
    <Grid container spacing={0} className={styles.CardClass}>
      <Grid item xs={12} md={6}>
        <BookImageContainer
          title={title}
          description={description}
          subtitle={subtitle}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BookDetailsTextSection
          title={title}
          description={description}
          subtitle={subtitle}
        />
      </Grid>
    </Grid>
  </>
);

BookDetails.defaultProps = {
  title: EMPTY_STRING,
  description: EMPTY_STRING,
  subtitle: EMPTY_STRING,
};

BookDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  subtitle: PropTypes.string,
};

export default BookDetails;
