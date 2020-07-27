import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import { bookSelector } from '../../../core/selectors/bookResultSelectors';
import { EMPTY_OBJECT } from '../../../core/common/constants';

/**
 * Component responsible to render the
 * information of a selected book
 * @param book the selected book
 * @returns {*}
 * @constructor
 */
const BookDetailsInfo = ({ book }) => (
  <Card variant="outlined">
    <CardContent>
      {console.log(book)}
      <List>
        <ListItem>
          Title:
          {book.title}
        </ListItem>
        <ListItem>
          Author:
          {book.author}
        </ListItem>
        <ListItem>
          Publisher:
          {book.publisher}
        </ListItem>
        <ListItem>
          Pages:
          {book.pages}
        </ListItem>
        <ListItem>
          Website:
          {book.website}
        </ListItem>
      </List>
    </CardContent>
  </Card>
);

BookDetailsInfo.defaultProps = {
  book: EMPTY_OBJECT,
};

BookDetailsInfo.propTypes = {
  book: PropTypes.shape(),
};

const mapStateToProps = (state) => (
  { book: bookSelector(state) }
);

export default connect(mapStateToProps)(BookDetailsInfo);
