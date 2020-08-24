import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { fetchEditorsSelectionBookAction } from '../actions/editorsSelectionBookActions';
import { editorsSelectionBookSelector } from '../selectors/editorsSelectionBookSelectors';
import { EMPTY_ARRAY } from '../../../core/common/constants';
import MainBookCard from '../../../core/components/MainBookCard/MainBookCard';
import useFetchSelectedBook from '../../../core/hooks/useFetchSelectedBooks';
import Title from '../../../core/components/TextElements/Title';
import styles from './EditorsSelectionBookComponent.module.scss';

const renderCardsHelper = (books) => books.length > 0 && books.map((book) => {
  const { volumeInfo, id } = book;
  return (
    <Grid item xs={12} md={4} lg={4}>
      <MainBookCard
        id={id}
        image={volumeInfo.imageLinks}
        title={volumeInfo.title}
        authors={volumeInfo.authors}
      />
    </Grid>
  );
});

/**
 * Main Compoent of editors selection section
 * @param books
 * @param bookIds
 * @returns {*}
 * @constructor
 */
const EditorsSelectionBookComponent = ({ books, bookIds }) => {
  useFetchSelectedBook(fetchEditorsSelectionBookAction, bookIds);
  return (
    <>
      <div className={styles.TitlePadding}>
        <Title title="Editor's Selection" tag="h3" align="center" />
      </div>
      <Grid container spacing={3}>
        {renderCardsHelper(books)}
      </Grid>
    </>
  );
};

EditorsSelectionBookComponent.defaultProps = {
  books: EMPTY_ARRAY,
  bookIds: EMPTY_ARRAY,
};

EditorsSelectionBookComponent.propTypes = {
  books: PropTypes.shape(),
  bookIds: PropTypes.shape(),
};

export const mapStateToProps = (state) => ({
  books: editorsSelectionBookSelector(state),
});

export default connect(mapStateToProps)(EditorsSelectionBookComponent);
