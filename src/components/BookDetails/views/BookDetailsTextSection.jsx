import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../../core/TextElements/Title';
import SmallIconBtn from '../../../core/Buttons/SmallIconBtn';
import BookDetailsInfo from './BookDetailsInfo';
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
const BookDetailsTextSection = ({ title, description }) => (
  <>
    <Title
      tag="h5"
      title={title}
      align="left"
      className={styles.SectionPaddingClass}
    />
    <Typography
      variant="body2"
      color="textSecondary"
      component="p"
      className={styles.SectionPaddingClass}
    >
      {description}
    </Typography>
    <div className={styles.SectionPaddingClass}>
      <SmallIconBtn
        color="secondary"
        icon="favorite"
        buttonName="Favorite"
      />
      <SmallIconBtn
        className={styles.BtnFloatRightClass}
        color="primary"
        icon="share"
        buttonName="Share"
      />
    </div>
    <p />
    <Divider />
    <div>
      <BookDetailsInfo />
    </div>
  </>
);

BookDetailsTextSection.defaultProps = {
  title: EMPTY_STRING,
  description: EMPTY_STRING,
};

BookDetailsTextSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default BookDetailsTextSection;
