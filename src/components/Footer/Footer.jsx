import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import styles from './Footer.module.scss';

/**
 * Component responsible for rendering the
 * footer of the app
 */
const Footer = () => (
  <Container>
    <div className={styles.FooterStyle}>
      <Divider />
      <div className={styles.CopyRightsClass}>
        <Typography variant="body2" color="textSecondary" component="p">
          © Copyright 2020 Gousopoulos Konstantinos
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link href="http://gousopoulos.gr" color="inherit">
            www.gousopoulos.gr
          </Link>
        </Typography>
      </div>
    </div>
  </Container>
);

export default Footer;
