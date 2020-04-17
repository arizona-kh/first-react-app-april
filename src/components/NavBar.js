import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar,
  withStyles
} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';


const styleSheet = {
    root: {
        width: '100%',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        padding: '8px',
        fontSize: '1rem',
        fontWeight: 400,
    }
}
const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
  };
  

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){ 
      return(
        <Drawer />
      )
   }

  //Larger Screens
  destroyDrawer(){
    return (
      <AppBar>
        <Toolbar>
        <List style={flexContainer}>
          <ListItem style={{width: "auto"}}>
            <Link style={styleSheet.link} to={'/'}> Home</Link>
            <Link style={styleSheet.link} to={'/blog'}> Blog</Link>
            <Link style={styleSheet.link} to={'/features'}> Features</Link>
          </ListItem>
        </List>
        <div style={{marginLeft: "auto"}}>
          <Link style={styleSheet.link} to={'/login'}> Log In</Link>
          <Link style={styleSheet.link} to={'/signUp'}> Sign Up</Link>
        </div>
        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(NavBar);
