import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import styles from './BookImageContainer.module.scss';
import { EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING } from '../../core/common/constants';

/**
 * Component responsible to render
 * and Card with Image and description
 * of a boom
 * @param title the title of the book
 * @param description the description of the book
 * @param subtitle the subtitle of the book
 * @returns {*}
 * @constructor
 */
const BookImageContainer = ({
  publishedDate, publisher, pageCount, image, authors,
}) => (
  <>
    <Card >
      <CardMedia
        className={styles.MediaClass}
        image={image.small}
      />
    </Card>
    <Card className={styles.BookDetailsClass}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={styles.RowDetailsClass}
        >
          <span>Book Details</span>
        </Typography>
        <Divider />
        <div className={styles.BookDetailsTitle}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={styles.RowDetailsClass}
          >
            <PermIdentityOutlinedIcon />
            <span>Authors:</span>
            {authors ? authors.join(', ') : 'N/A'}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={styles.RowDetailsClass}
          >
            <BookmarkBorderIcon />
            <span>Publisher:</span>
            {publisher}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={styles.RowDetailsClass}
          >
            <CalendarTodayIcon />
            <span>PublishedDate:</span>
            {publishedDate}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={styles.RowDetailsClass}
          >
            <FileCopyOutlinedIcon />
            <span>Pages:</span>
            {pageCount}
          </Typography>
        </div>
      </CardContent>
    </Card>
  </>
);

BookImageContainer.defaultProps = {
  image: EMPTY_OBJECT,
  publishedDate: EMPTY_STRING,
  publisher: EMPTY_STRING,
  pageCount: EMPTY_STRING,
  authors: EMPTY_ARRAY,

};

BookImageContainer.propTypes = {
  image: PropTypes.shape(),
  publishedDate: PropTypes.string,
  publisher: PropTypes.string,
  pageCount: PropTypes.string,
  authors: PropTypes.shape(),
};

export default BookImageContainer;
