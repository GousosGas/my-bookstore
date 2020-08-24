import React from 'react';
import { Container } from '@material-ui/core';
import styles from './NoPageFound.module.scss';

const NoPagePage = () => (
  <Container>
    <div className={styles.NoPageFoundClass}>
      <h1>404 - Not found</h1>
    </div>
  </Container>
);

export default NoPagePage;
