import React from 'react';
import { Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Container from '@material-ui/core/Container';
import BookPage from './pages/BookPage/BookPage';
import HomePage from './pages/HomePage/HomePage';
import styles from './App.module.scss';
import NavTitle from './core/NavTitle/NavTitle';
import Footer from './components/Footer/Footer';
import BookForm from './pages/BookForm/BookForm';

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
const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div>
    <AppBar position="static" color="transparent" class={styles.BackGroundColor}>
      <NavTitle tag="h3" title="BookStore" align="left" />
    </AppBar>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/create" component={BookForm} />
    <Route exact path="/book/:id" component={BookPage} />
    <Container maxWidth="md">
      <Footer />
    </Container>
  </div>
);

export default App;
