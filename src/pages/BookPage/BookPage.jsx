import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
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
    // eslint-disable-next-line react/prop-types
    console.log(id);
    this.props.fetchBookResultsAction(id);
  }

  render() {
    return (
      <>
        <Container maxWidth="md">
          <BookDetails {...this.props.book} />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => (
  { book: bookSelector(state) }
);

export default connect(mapStateToProps, { fetchBookResultsAction })(BookPage);
