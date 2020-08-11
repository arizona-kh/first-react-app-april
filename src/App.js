import React, { Fragment, useEffect } from 'react';
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import { auth } from './configs/firebase.config';
import { setCurrentUser, clearCurrentUser} from './redux/auth/auth.actions';

function App({ currentUser, setCurrentUser, clearCurrentUser }) { 

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        // set current user if user's object extists
        setCurrentUser(user);
      } else {
        // if user doesn't exist clear current user
        clearCurrentUser();
      }
    })
    return () => unsubscribeFromAuth();
  }, [currentUser, setCurrentUser, clearCurrentUser]);

  return (
      <Fragment>
        <NavBar />
      </Fragment>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser())
})

//in connect, pass state as props e.g. mapStateToProps sends currentUser: null
export default connect( mapStateToProps, mapDispatchToProps )(App);
