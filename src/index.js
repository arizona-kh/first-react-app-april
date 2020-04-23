import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import LogIn  from './components/LogIn';
import SignUp  from './components/SignUp';
import Notfound from './components/404';


const routing = (
  <Router >
    <Switch>
    <Route path='/' exact component={App} />
    <Route path='/login' component={LogIn} />
    <Route path='/signup' component={SignUp} />
    <Route component={Notfound} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
