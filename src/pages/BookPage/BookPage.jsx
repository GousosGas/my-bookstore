import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookDetails from '../../components/BookDetails/views/BookDetails';
import { fetchBookResultsAction } from '../../components/BookDetails/actions/actions';
import { bookSelector } from '../../core/selectors/bookResultSelectors';

/**
 * Class Based component responsible for rendering
 * the BookPage.
 * In this page we present the selected
 * book
 */
class BookPage extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchBookResultsAction(id);
  }

  render() {
    return (
      <>
        <Container maxWidth="md">
          {/* react/jsx-props-no-spreading */}
          {/* eslint-disable-next-line react/destructuring-assignment, react/jsx-props-no-spreading */}
          <BookDetails {...this.props.book} />
        </Container>
      </>
    );
  }
}

BookPage.propTypes = {
  match: PropTypes.shape.isRequired,
  book: PropTypes.shape.isRequired,
  fetchBookResultsAction: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => (
  { book: bookSelector(state) }
);

export default connect(mapStateToProps, { fetchBookResultsAction })(BookPage);
