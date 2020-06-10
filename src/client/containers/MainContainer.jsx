import React from 'react';
import { Container, Typography, AppBar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink} from 'react-router-dom';
import NavContainer from './NavContainer';
import FeedContainer from './FeedContainer';

// generate object to hold our custom stylings
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // header of entire app spans across the top
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    padding: theme.spacing(2),
    width: "100%",
  },
  header: {
    display: 'inline',
    width: "100%",
  },
  subHeader: {
    display: 'inline',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontSize: 15
  },
  button1:{
    underline: 'none',
    display: 'inline',
    marginLeft: theme.spacing(7),
    align: 'inherit'|'right',
  },
  button2:{
    underline: 'none',
    display: 'inline',
    marginLeft: theme.spacing(2),
    align: 'inherit'|'right',
  }
}));

// holds our top header bar, as well as our side bar (drawer), will also hold our feed container
const MainContainer = (props) => {
  const classes = useStyles();
  // functions as css-reset
  return (
    <Container maxWidth="lg" className={classes.root}>
      {/* AppBar, where the title of website is, stays on top*/}
      <AppBar position="fixed" className={classes.appBar}>
        <Typography variant="h4" align="left" className={classes.header}>
          {'</DevShark>'}
          <Typography variant="inherit" className={classes.subHeader}>
            Developer Resource Aggregator
          </Typography>
          <NavLink to="/login" style={{ textDecoration: 'none', display: 'inline'}}>
            <Button variant="contained" color="primary" className={classes.button1}>Login</Button>
          </NavLink>
          <NavLink to="/signup" style={{ textDecoration: 'none', display: 'inline'}}>
            <Button variant="contained" color="primary" className={classes.button2}>Sign in</Button>
          </NavLink>
        </Typography>
      </AppBar>
      {/* Drawer is our sidebar navigation component, stays permanently fixed to side, as docs recommend on desktop usage */}
      <div className={classes.offset}></div>
      <NavContainer />
      <FeedContainer />
    </Container>
  );
};

export default MainContainer; 
