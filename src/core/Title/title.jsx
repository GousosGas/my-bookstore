import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Component responsible to render
 * a title
 * it accepts header tags like
 * 'h1', 'h2', 'h3', 'h4', 'h5'
 * @param title the title provided by props
 * @param tag the tag of the header
 */
const Title = ({ title, tag }) => (
  <Typography variant={tag}>
    {title}
  </Typography>
);

Title.propTypes = {
  title: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']).isRequired,
  tag: PropTypes.string.isRequired,
};

export default Title;
