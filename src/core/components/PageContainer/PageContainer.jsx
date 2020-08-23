import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import styles from '../../../pages/HomePage/HomePage.module.scss';

/**
 * Core component - main container -tha wraps
 * an element and gives the correct size of the app
 * @param props
 * @returns {*}
 * @constructor
 */
const PageContainer = (props) => (
  <Container maxWidth="md" className={styles.SectionPadding}>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {props.children}
  </Container>
);

PageContainer.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default PageContainer;
