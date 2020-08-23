import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ShopTwoSharpIcon from '@material-ui/icons/ShopTwoSharp';
import AppleIcon from '@material-ui/icons/Apple';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import styles from './CarouselBookCard.module.scss';
import { EMPTY_ARRAY, EMPTY_STRING } from '../../../common/constants';

const buyLinksAmazonResolver = (buyLinks) => {
  const amazon = buyLinks && buyLinks.filter((link) => link.name === 'Amazon');
  return amazon[0].url;
};
const buyLinksAppleBookResolver = (buyLinks) => {
  const apple = buyLinks && buyLinks.filter((link) => link.name === 'Apple Books');
  return apple[0].url;
};

/**
 * Component responsible to render
 * the card of the carousel of best seller books
 * @param image
 * @param title
 * @param authors
 * @param style
 * @param buyLinks
 * @returns {*}
 * @constructor
 */
const CarouselBookCard = ({
  image, title, authors, style, buyLinks,
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
    <Divider />
    <CardActions>
      <div className={styles.BuyBtns}>
        <IconButton
          color="primary"
          component="a"
          href={buyLinksAmazonResolver(buyLinks || EMPTY_ARRAY)}
        >
          <ShopTwoSharpIcon />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href={buyLinksAppleBookResolver(buyLinks || EMPTY_ARRAY)}
        >
          <AppleIcon />
        </IconButton>
      </div>
    </CardActions>
  </Card>
);

CarouselBookCard.defaultProps = {
  title: EMPTY_STRING,
  authors: EMPTY_ARRAY,
  style: EMPTY_STRING,
  buyLinks: EMPTY_ARRAY,
};

CarouselBookCard.propTypes = {
  image: PropTypes.shape().isRequired,
  title: PropTypes.string,
  authors: PropTypes.shape(),
  style: PropTypes.string,
  buyLinks: PropTypes.shape(),
};

export default CarouselBookCard;
