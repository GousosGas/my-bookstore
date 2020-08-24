import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Divider from '@material-ui/core/Divider';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import Rating from '@material-ui/lab/Rating';
import Title from '../../../core/components/TextElements/Title';
import { EMPTY_STRING } from '../../../core/common/constants';
import styles from './BookDetailsTextSection.module.scss';

/**
 * Component responsible to render the basic information
 * a selected book
 * @param title the title of the book
 * @param description the description of the book
 * @returns {*}
 * @constructor
 */
const BookDetailsTextSection = ({
  title, description, authors, ratingsCount,
}) => (
  <>
    <Title
      tag="h5"
      title={title}
      align="left"
      className={styles.SectionPaddingClass}
    />
    <Typography
      color="textSecondary"
      component="h3"
      className={styles.SectionPaddingClass}
    >
      <div className={styles.AuthorContainerClass}>
        <PermIdentityOutlinedIcon />
        <span>{authors ? authors.join(', ') : 'N/A'}</span>
      </div>
    </Typography>
    <div className={styles.RatingContainerClass}>
      <Rating
        name="read-only"
        value={ratingsCount || 0}
        size="small"
        readOnly
      />
    </div>
    <Divider />
    <div className={styles.DescriptionContentClass}>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={styles.SectionPaddingClass}
      >
        {description ? ReactHtmlParser(description) : 'No description is provided'}
      </Typography>
    </div>
  </>
);

BookDetailsTextSection.defaultProps = {
  title: EMPTY_STRING,
  description: EMPTY_STRING,
  authors: EMPTY_STRING,
  ratingsCount: 0,
};

BookDetailsTextSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  authors: PropTypes.string,
  ratingsCount: PropTypes.number,
};

export default BookDetailsTextSection;
