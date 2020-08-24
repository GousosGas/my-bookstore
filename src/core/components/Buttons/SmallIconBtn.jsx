import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { EMPTY_OBJECT } from '../../common/constants';

/**
 * Component responsible to render a small
 * button with startIoon
 * @param color the color of the btn
 * @param buttonName the name of the btn
 * @param icon the icons of this button
 * @param className css classes
 * @returns {*}
 * @constructor
 */
const SmallIconBtn = ({
  color, buttonName, icon, className,
}) => (
  <Button
    className={className || null}
    variant="outlined"
    color={color}
    size="small"
    startIcon={<Icon>{icon}</Icon>}
  >
    {buttonName}
  </Button>
);

SmallIconBtn.defaultProps = {
  className: EMPTY_OBJECT,
};

SmallIconBtn.propTypes = {
  color: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.shape(),
};
export default SmallIconBtn;
