import React from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookDetails from '../../components/BookDetails/views/BookDetails';
import { fetchBookResultsAction } from '../../components/BookDetails/actions/actions';
import { bookSelector } from '../../core/selectors/bookResultSelectors';
import useFetchBook from '../../core/hooks/useFetchBook';

/**
 * Class Based component responsible for rendering
 * the BookPage.
 * In this page we present the selected
 * book
 */
const BookPage = ({ match, book }) => {
  const { id } = match.params;
  useFetchBook(fetchBookResultsAction, id);
  return (
    <>
      <Container maxWidth="md">
        {/* react/jsx-props-no-spreading */}
        <BookDetails {...book} />
      </Container>
    </>
  );
};

BookPage.propTypes = {
  match: PropTypes.shape.isRequired,
  book: PropTypes.shape.isRequired,
  fetchBookResultsAction: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => (
  { book: bookSelector(state) }
);

export default connect(mapStateToProps, { fetchBookResultsAction })(BookPage);
