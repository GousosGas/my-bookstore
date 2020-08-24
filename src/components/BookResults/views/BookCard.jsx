import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import { EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING } from '../../../core/common/constants';
import styles from './BookCard.module.scss';
import BookCardDetailsList from './BookCardDetailsList';

/**
 * Component responsible for rendering a
 * book Card
 * @param author the name of the author
 * @param title the title of the book
 */
const BookCard = ({
  id,
  authors,
  title,
  publisher,
  imageLinks,
  rating,
}) => (
  <Card className={styles.CardRoot}>
    <CardActionArea component={Link} to={`/book/${id}`}>
      <CardMedia
        className={styles.CardMedia}
        image={imageLinks.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <div className={styles.RatingContainerClass}>
          <Rating name="read-only" value={rating} readOnly />
        </div>
        <Divider />
        <BookCardDetailsList authors={authors} publisher={publisher} />
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </CardActionArea>
  </Card>
);

BookCard.defaultProps = {
  id: EMPTY_STRING,
  authors: EMPTY_ARRAY,
  title: EMPTY_STRING,
  publisher: EMPTY_STRING,
  imageLinks: EMPTY_OBJECT,
  rating: 0,
};

BookCard.propTypes = {
  id: PropTypes.string,
  authors: PropTypes.shape(),
  title: PropTypes.string,
  publisher: PropTypes.string,
  imageLinks: PropTypes.shape(),
  rating: PropTypes.number,
};

export default BookCard;
