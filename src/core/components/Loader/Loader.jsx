import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.LoaderContainer}>
    <div className={styles.LoaderCenter}>
      <CircularProgress />
    </div>
  </div>
);

export default Loader;
