import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomePageTitleSection from '../../components/BookDetails/views/TitleSection/HomePageTitleSection';
import BookSearch from '../../components/BookSearch/views/BookSearch';
import BookResults from '../../components/BookResults/views/BookResults';
import styles from './HomePage.module.scss';
import BookSearchResults from '../../components/BookSearch/views/BookSearchResults';
import { booksSelector, resultsFoundSelector, searchSelector } from '../../core/selectors/bookResultSelectors';
import { EMPTY_ARRAY, EMPTY_OBJECT } from '../../core/common/constants';
import NoBookResult from '../../components/BookSearch/views/NoBookResult';

/**
 * Component responsible to render
 * the Homepage
 * @param books the list of books
 * @param search the result of a search query
 * @param found indicator if the searched book found
 * @returns {*}
 * @constructor
 */
const HomePage = ({ books, search, found }) => (
  <>
    <Container maxWidth="md">
      <HomePageTitleSection />
      <BookSearch />
      {found.get('resultsFound') === false ? <NoBookResult /> : null}
      <Divider className={styles.DividerClass} />
      {search.length > 0
        ? <BookSearchResults search={search} />
        : <BookResults books={books} />}
    </Container>
  </>
);

HomePage.defaultProps = {
  books: EMPTY_ARRAY,
  search: EMPTY_ARRAY,
  found: EMPTY_OBJECT,
};

HomePage.propTypes = {
  books: PropTypes.shape(),
  search: PropTypes.shape(),
  found: PropTypes.shape(),
};

const mapStateToProps = (state) => ({
  books: booksSelector(state),
  search: searchSelector(state),
  found: resultsFoundSelector(state),
});
export default connect(mapStateToProps)(HomePage);
