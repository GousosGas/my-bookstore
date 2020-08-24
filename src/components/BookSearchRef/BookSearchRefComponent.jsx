import React from 'react';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './BookSearchRefComponent.module.scss';

/**
 * Componet responsible for render the
 * Search book area in the home page
 * @returns {*}
 * @constructor
 */
const BookSearchRefComponent = () => (
  <div className={styles.BookSearchRefContainer}>
    <div className={styles.BookSearchElem}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
      >
        For more books please search in our library
      </Typography>
      <Link to="/search">
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Link>
    </div>
  </div>
);

BookSearchRefComponent.propTypes = {

};

export default BookSearchRefComponent;
