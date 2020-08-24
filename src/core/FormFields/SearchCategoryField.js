import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import styles from './SearchCategoryField.module.scss';
import { BOOK_FILTER, EMPTY_STRING } from '../common/constants';
import capitalizeFirstLetter from '../common/utils';

/**
 * Component that renders a category filter
 * @param label the label of the textField
 * @param input the input data
 * @param meta the meta data
 * @param categories array that contans our categories
 */
const SearchCategoryField = ({ input, meta }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <FormControl variant="outlined" className={styles.FilterWidth}>
      <Select
        error={meta.touched && meta.error}
        id="search-filter"
        value={input.value}
        displayEmpty
        onChange={input.onChange}
      >
        <MenuItem value="">Filter</MenuItem>
        {
          BOOK_FILTER.map((filter) => (
            <MenuItem key={filter} value={filter}>{capitalizeFirstLetter(filter)}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
    {meta.touched && meta.error
      ? <Typography variant="caption" display="block" gutterBottom color="secondary">{meta.error}</Typography> : null}
  </>
);

SearchCategoryField.defaultProps = {
  meta: EMPTY_STRING,
};

SearchCategoryField.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape(),
};

export default SearchCategoryField;
