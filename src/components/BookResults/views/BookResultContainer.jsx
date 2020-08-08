import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoBookResult from '../../BookSearch/views/NoBookResult';
import BookSearchResults from '../../BookSearch/views/BookSearchResults';
import { resultsFoundSelector, searchSelector } from '../../../core/selectors/bookResultSelectors';
import { EMPTY_ARRAY, EMPTY_OBJECT } from '../../../core/common/constants';

const BookResultContainer = ({ search, found }) => (
  <>
    {found.get('resultsFound') === false ? <NoBookResult /> : null}
    {search.length > 0
      ? <BookSearchResults search={search} />
      : null}
  </>
);

BookResultContainer.defaultProps = {
  search: EMPTY_ARRAY,
  found: EMPTY_OBJECT,
};

BookResultContainer.propTypes = {
  search: PropTypes.shape(),
  found: PropTypes.shape(),
};

const mapStateToProps = (state) => ({
  search: searchSelector(state),
  found: resultsFoundSelector(state),
});

export default connect(mapStateToProps)(BookResultContainer);
