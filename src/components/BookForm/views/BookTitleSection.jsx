import React from 'react';
import Title from '../../../core/components/TextElements/Title';
import ParagraphText from '../../../core/components/TextElements/ParagraphText';
import styles from '../../BookDetails/views/TitleSection/HomePageTitleSection.module.scss';
import { CREATEPAGE_TITLE, CREATEPAGE_TITLE_DESCRIPTION } from '../common/constants';

/**
 * Component responsible to render
 * a Title and description
 * of a @see BookForm
 * @returns {*}
 * @constructor
 */
const BookTitleSection = () => (
  <div className={styles.TitleSectionClass}>
    <Title align="center" tag="h3" title={CREATEPAGE_TITLE} />
    <ParagraphText text={CREATEPAGE_TITLE_DESCRIPTION} padding={styles.TitleSectionClass} />
  </div>
);

export default BookTitleSection;
