import React from 'react';
import Button from '@material-ui/core/Button';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BuyButton = ({ id }) => (
  <Link
    to={`/book/${id}`}
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

BuyButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BuyButton;
