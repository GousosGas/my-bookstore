import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import * as PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from 'react-router-dom';
import styles from './BookCard.module.scss';
import { EMPTY_STRING } from '../../../core/common/constants';

/**
 * Component responsible for rendering a
 * book Card
 * @param author the name of the author
 * @param title the title of the book
 */
const BookCard = ({
  author,
  title,
  isbn,
}) => (
  <Card className={styles.CardRoot}>
    <CardActionArea component={Link} to={`/book/${isbn}`}>
      <CardMedia
        className={styles.CardMedia}
        image="https://via.placeholder.com/150x150"
      />
      <CardHeader
        title={title}
        subheader={author}
      />
    </CardActionArea>
  </Card>
);

BookCard.defaultProps = {
  author: EMPTY_STRING,
  title: EMPTY_STRING,
  isbn: EMPTY_STRING,
};

BookCard.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  isbn: PropTypes.string,
};

export default BookCard;
