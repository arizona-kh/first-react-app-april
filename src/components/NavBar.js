
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { auth } from '../configs/firebase.config';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({currentUser}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button 
            color="inherit"
            component={Link}
            to={'/home'}
          >
          Home
          </Button>
          <Button 
            color="inherit"
            component={Link}
            to={'/login'}
          >
          Login
          </Button>
          <Button 
            color="inherit"
            component={Link}
            to={'/signUp'}
          >
          Sign Up
          </Button>
          { currentUser && currentUser ? (
          <Button 
            color="inherit"
            component={Link}
            onClick={() =>auth.signOut()}
          >
          Sign Out
          </Button>
          ) : null }
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
})  

export default connect( mapStateToProps, null )(NavBar);
