import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import styles from './MainBookCard.module.scss';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../common/constants';
import ReadmoreButton from '../Buttons/ReadmoreButton';

/**
 * Core component responsible to render a card
 * with action
 * @param image
 * @param title
 * @param authors
 * @param style
 * @param id
 * @returns {*}
 * @constructor
 */
const MainBookCard = ({
  image, title, authors, style, id,
}) => (
  <Card className={style || null}>
    <CardMedia
      image={image && image.medium ? image.medium : image}
      title="Contemplative Reptile"
      className={styles.EditorsImgSelectionContainer}
    />
    <CardContent>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        align="center"
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        component="p"
      >
        {Array.isArray(authors) ? authors.join(', ') : authors}
      </Typography>
    </CardContent>
    <CardActions>
      <ReadmoreButton id={id} />
    </CardActions>
  </Card>
);

MainBookCard.defaultProps = {
  title: EMPTY_STRING,
  authors: EMPTY_ARRAY,
  style: EMPTY_STRING,
  id: EMPTY_STRING,
};

MainBookCard.propTypes = {
  image: PropTypes.shape().isRequired,
  title: PropTypes.string,
  authors: PropTypes.shape(),
  style: PropTypes.string,
  id: PropTypes.string,
};

export default MainBookCard;
