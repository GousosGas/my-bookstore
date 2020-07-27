import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import styles from './BookImageContainer.module.scss';
import { EMPTY_STRING } from '../../core/common/constants';

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
const BookImageContainer = ({ title, description, subtitle }) => (
  <Card className={styles.Root}>
    <CardHeader
      avatar={(
        <Avatar aria-label="recipe">
          <PersonIcon />
        </Avatar>
                  )}
      title={title}
      subheader={subtitle}
    />
    <CardMedia
      className={styles.Media}
      image="https://via.placeholder.com/150x300"
      title="Paella dish"
      style={{ height: '90px' }}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

BookImageContainer.defaultProps = {
  title: EMPTY_STRING,
  description: EMPTY_STRING,
  subtitle: EMPTY_STRING,
};

BookImageContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  subtitle: PropTypes.string,
};

export default BookImageContainer;
