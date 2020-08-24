import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import styles from './NavTitle.module.scss';
import HomePageTitleSection from '../../../components/BookDetails/views/TitleSection/HomePageTitleSection';

/**
 * Component responsible to render
 * a title
 * it accepts header tags like
 * 'h1', 'h2', 'h3', 'h4', 'h5'
 * @param title the title provided by props
 * @param tag the tag of the header
 * @param align title posission
 */
const NavTitle = ({ title, tag, align }) => (
  <>
    <Container maxWidth="md">
      <Typography
        variant={tag}
        align={align}
        className={styles.MainTitleStyle}
      >
        {title}
      </Typography>
      <HomePageTitleSection />
      <div className={styles.IconStyle}>
        <ExpandMoreSharpIcon fontSize="large" />
      </div>
    </Container>
  </>
);

NavTitle.propTypes = {
  title: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']).isRequired,
  tag: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
};

export default NavTitle;
