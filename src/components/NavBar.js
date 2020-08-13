
import React, { useState } from 'react';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { auth } from '../configs/firebase.config';
import { connect } from 'react-redux';

const drawerWidth = '100vw';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.down('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {[theme.breakpoints.up('sm')]: {
    display: 'none',
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 0,
    marginLeft: 'auto',
  }
}));


const NavBar = ({currentUser}) => {
  const classes = useStyles();
  const dummyCategories = ['Hokusai', 'Hiroshige', 'Utamaro', 'Kuniyoshi', 'Yoshitoshi']
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            >
          <MenuIcon />
          </IconButton>
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

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
})  

export default connect( mapStateToProps, null )(NavBar);
