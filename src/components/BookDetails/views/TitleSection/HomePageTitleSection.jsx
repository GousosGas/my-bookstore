import React from 'react';
import Title from '../../../../core/components/TextElements/Title';
import { HOMEPAGE_TITLE, HOMEPAGE_TITLE_DESCRIPTION } from '../../consts/constants';
import ParagraphText from '../../../../core/components/TextElements/ParagraphText';
import styles from './HomePageTitleSection.module.scss';

/**
 * Component responsible for
 * rendering the title of the homepage
 * @returns {*}
 * @constructor
 */
const HomePageTitleSection = () => (
  <div className={styles.TitleSectionClass}>
    <Title title={HOMEPAGE_TITLE} tag="h4" align="center" />
    <ParagraphText text={HOMEPAGE_TITLE_DESCRIPTION} padding={styles.TitleSectionClass} />
  </div>
);

export default HomePageTitleSection;
