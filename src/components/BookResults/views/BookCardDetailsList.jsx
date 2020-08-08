import React from 'react';
import * as PropTypes from 'prop-types';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import Typography from '@material-ui/core/Typography';
import styles from './BookCardDetailsList.module.scss';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../../core/common/constants';

/**
 * Component responsible to render
 * the author and a publsher
 * inside a Card
 * @returns {*}
 * @constructor
 */
const BookCardDetailsList = ({ authors, publisher }) => (
  <>
    <div className={styles.RowContainer}>
      <div className={styles.IconRowClass}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={styles.RowDetailsClass}
        >
          <PermIdentityOutlinedIcon />
          <span>
            Author:
            {' '}
            {authors.join(', ') || 'N/A'}
          </span>
        </Typography>
      </div>
    </div>
    <div className={styles.RowContainer}>
      <div className={styles.IconRowClass}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={styles.RowDetailsClass}
        >
          <BookmarkBorderSharpIcon />
          <span>
            Publisher:
            {' '}
            {publisher || 'N/A'}
          </span>
        </Typography>
      </div>
    </div>
  </>
);

BookCardDetailsList.defaultProps = {
  authors: EMPTY_ARRAY,
  publisher: EMPTY_STRING,
};

BookCardDetailsList.propTypes = {
  authors: PropTypes.shape(),
  publisher: PropTypes.string,
};

export default BookCardDetailsList;
