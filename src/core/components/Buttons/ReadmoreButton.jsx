import React from 'react';
import Button from '@material-ui/core/Button';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ReadmoreButton.module.scss';

/**
 * Component responsible to render a readmor button
 * It mainly used in the cards
 * @param id
 * @returns {*}
 * @constructor
 */
const ReadmoreButton = ({ id }) => (
  <Link
    to={`/book/${id}`}
    className={styles.BtnContainer}
  >
    <Button
      variant="contained"
      color="primary"
      size="small"
      startIcon={<VisibilitySharpIcon />}
    >
      Read more
    </Button>
  </Link>
);

ReadmoreButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ReadmoreButton;
