import React from 'react';
import { Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar/AppBar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookPage from './pages/BookPage/BookPage';
import HomePage from './pages/HomePage/HomePage';
import styles from './App.module.scss';
import NavTitle from './core/components/NavTitle/NavTitle';
import Footer from './components/Footer/Footer';
import BookForm from './pages/BookForm/BookForm';
import Loader from './core/components/Loader/Loader';
import { uiSelectorLoading } from './core/selectors/bookResultSelectors';

/** *
 * The main app component for Bookstore App
 * It renders the AppBar, the Pages and
 * the footer
 * @see Footer
 * @see NavTitle
 * @see HomePage
 * @see BookPage
 * @see BookForm
 */
const App = ({ loading }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div>
    {loading ? <Loader /> : null}
    <AppBar position="static" color="transparent" class={styles.BackGroundColor}>
      <NavTitle tag="h3" title="myBookStore" align="center" />
    </AppBar>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/create" component={BookForm} />
    <Route exact path="/book/:id" component={BookPage} />
    <Footer />
  </div>
);

App.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export const mapStateToProps = (state) => ({
  loading: uiSelectorLoading(state),
});

export default connect(mapStateToProps)(App);
