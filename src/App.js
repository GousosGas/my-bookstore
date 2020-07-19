import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import BookStoreBreadcrumbs from './core/Breadcrumbs/BookStoreBreadcrumbs';
import Title from './core/Title/title';

/** *
 * The main app component
 */
const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Container maxWidth="lg">
    <Title tag="h3" title="BookStore" />
    <BookStoreBreadcrumbs />
    <Grid container spacing={3}>
      <Grid item xs={7}>
        an image with stas
      </Grid>
      <Grid item xs={5}>
        <Title tag="h5" title="Book Title" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </p>
        <div>
          <Button
            color="secondary"
            size="small"
            startIcon={<AccessAlarmIcon />}
          >
            Favorite
          </Button>
          <Button
            color="secondary"
            size="small"
            startIcon={<AccessAlarmIcon />}
          >
            share
          </Button>
        </div>
        <div>
          <List>
            <ListItem>
              Category:#tag
            </ListItem>
            <ListItem>
              Year:#tag
            </ListItem>
            <ListItem>
              Number of pages:#tag
            </ListItem>
            <ListItem>
              Publisher:#tag
            </ListItem>
            <ListItem>
              ISBN-10
            </ListItem>
            <ListItem>
              ISBN-10
            </ListItem>
          </List>
          <Button>BUY</Button>
        </div>
      </Grid>
    </Grid>
  </Container>
);

export default App;
