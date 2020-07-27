import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING } from '../common/constants';
import styles from './SearchCategoryField.module.scss';

/**
 * TextField used by redux form
 * @param label the label of the textField
 * @param input the input data
 * @param meta the meta data
 */
const BookTextField = ({
  label, input, className, meta,
}) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div>
    <TextField
      className={className || null}
      error={meta.touched && meta.error}
      id="outlined-error-helper-text"
      label={label}
      defaultValue="Hello World"
      helperText={meta.touched && meta.error ? meta.error : null}
      variant="outlined"
      value={input.value}
      onChange={input.onChange}
    />
  </div>
);

BookTextField.defaultProps = {
  label: EMPTY_STRING,
  className: EMPTY_STRING,
  meta: EMPTY_OBJECT,
};

BookTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape(),
  label: PropTypes.string,
  className: PropTypes.string,
};

/**
 * BookTextFieldArea used by redux form
 * @param label the label of the textField
 * @param input the input data
 * @param meta the meta data
 */
const BookTextFieldArea = ({ label, input, meta }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <TextField
    id="outlined-error-helper-text"
    error={meta.touched && meta.error}
    helperText={meta.touched && meta.error ? meta.error : null}
    fullWidth
    multiline
    label={label}
    defaultValue="Hello World"
    variant="outlined"
    rows={2}
    rowsMax={8}
    value={input.value}
    onChange={input.onChange}
  />
);

BookTextFieldArea.defaultProps = {
  label: EMPTY_STRING,
  meta: EMPTY_OBJECT,
};

BookTextFieldArea.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape(),
};

/**
 * Multpiple Select field used by redux form
 * @param label the label of the textField
 * @param input the input data
 * @param meta the meta data
 * @param categories array that contans our categories
 */
const BookMultipleSelect = ({
  input, meta, categories,
}) => (
  <>
    <FormControl variant="outlined" className={styles.FilterWidth}>
      <Select
        multiple
        value={Array.isArray(input.value) ? input.value : []}
        error={meta.touched && meta.error}
        id="category-filter"
        displayEmpty
        onChange={input.onChange}
      >
        <MenuItem value="" disabled>
          Categories
        </MenuItem>
        {categories && categories.map((category) => (
          <MenuItem key={category} value={category}>{category}</MenuItem>
        ))}
      </Select>
    </FormControl>
    {meta.touched && meta.error
      ? <Typography color="secondary">{meta.error}</Typography> : null}
  </>
);

BookMultipleSelect.defaultProps = {
  meta: EMPTY_OBJECT,
  categories: EMPTY_ARRAY,
};

BookMultipleSelect.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape(),
  categories: PropTypes.shape(),
};

export {
  BookTextField,
  BookTextFieldArea,
  BookMultipleSelect,
};
