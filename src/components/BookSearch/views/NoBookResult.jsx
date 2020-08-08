import React from 'react';
import Title from '../../../core/components/TextElements/Title';
import styles from './NoBookResult.module.scss';

/**
 * Component that renders
 * if book with our selected criterian not
 * found
 * @returns {*}
 * @constructor
 */
const NoBookResult = () => (
  <div className={styles.ContainerClass}>
    <Title align="center" tag="h5" title="No books found" />
  </div>
);

export default NoBookResult;
