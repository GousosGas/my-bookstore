import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Component returns a Paragraph
 * @param text text
 * @param padding padding style
 * @returns {*}
 * @constructor
 */
const ParagraphText = ({ text, padding }) => (
  <Typography variant="body2" color="textSecondary" component="p" className={padding}>
    {text}
  </Typography>
);

ParagraphText.propTypes = {
  text: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
};

export default ParagraphText;
