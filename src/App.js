import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import { connect } from 'react-redux';

function App({ currentUser }) { 
  return (
      <Fragment>
        <NavBar />
      </Fragment>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
})

//in connect, pass state as props e.g. mapStateToProps sends currentUser: null
export default connect( mapStateToProps )(App);
