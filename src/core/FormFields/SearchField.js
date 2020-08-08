import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import { EMPTY_STRING } from '../common/constants';

/**
* Component that renders a SearchField
* @param input the input data
* @param meta the meta data
*/
const SearchField = ({ input, meta, label }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
      <OutlinedInput
        error={meta.touched && meta.error}
        id="outlined-adornment-amount"
        value={input.value}
        onChange={input.onChange}
        labelWidth={60}
      />
    </FormControl>
    {meta.touched && meta.error
      ? <Typography variant="caption" display="block" gutterBottom color="secondary">{meta.error}</Typography> : null}
  </>
);

SearchField.defaultProps = {
  meta: EMPTY_STRING,
};
SearchField.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape(),
  label: PropTypes.string.isRequired,
};

export default SearchField;
