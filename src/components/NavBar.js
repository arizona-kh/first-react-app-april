import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar,
  withStyles
} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Drawer from './Drawer';
import Button from '@material-ui/core/Button';


const styleSheet = {
    root: {
        width: '100%',
    },
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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text} style={{width: "auto"}}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
        <div style={{marginLeft: "auto"}}>
        <Button color="inherit">Login</Button>
        <Button color="inherit">{"Sign Up"}</Button>
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
