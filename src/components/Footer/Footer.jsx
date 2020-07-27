import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import styles from './Footer.module.scss';

/**
 * Component responsible for rendering the
 * footer of the app
 */
const Footer = () => (
  <div className={styles.FooterStyle}>
    <Divider />
    <Grid container spacing={3} className={styles.FooterStyle}>
      <Grid item xs={12} md={10}>
        <Typography variant="body2" color="textSecondary" component="p">
          © Copyright 2020 Gousopoulos Konstantinos
        </Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link href="http://gousopoulos.gr" color="inherit">
            www.gousopoulos.gr
          </Link>
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default Footer;
