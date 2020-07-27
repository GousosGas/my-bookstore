import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component returns a Title
 * @param title the provided title
 * @param tag the provided tag form h1-h5
 * @param align the text align
 * @returns {*}
 * @constructor
 */
const Title = ({ title, tag, align }) => (
  <Typography variant={tag} align={align}>
    {title}
  </Typography>
);

Title.propTypes = {
  title: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']).isRequired,
  tag: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
};

export default Title;
