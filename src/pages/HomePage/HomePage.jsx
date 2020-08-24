import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollToTop from 'react-scroll-up';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import BookSearch from '../../components/BookSearch/views/BookSearch';
import styles from './HomePage.module.scss';
import BookResultContainer from '../../components/BookResults/views/BookResultContainer';

/**
 * Component responsible to render
 * the Homepage
 */
const HomePage = () => (
  <>
    <Container maxWidth="md" className={styles.SectionPadding}>
      <BookSearch />
      <BookResultContainer />
      <ScrollToTop showUnder={160} style={{ bottom: '100px' }}>
        <ExpandLessOutlinedIcon fontSize="large" />
      </ScrollToTop>
    </Container>
  </>
);

export default HomePage;
