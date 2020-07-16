import React from 'react';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import LogIn  from './components/LogIn';
import SignUp  from './components/SignUp';
import Notfound from './components/404';
import Home from './components/Home';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';


const routing = (
  <Provider store={store}>
    <Router >
      <Switch>
        <Route path='/' exact component={App} />
          <Route path={routes.home} component={Home} />
          <Route path={routes.login} component={LogIn} />
          <Route path={routes.signup} component={SignUp} />
          <Route component={Notfound} />
      </Switch>
    </Router>
    </Provider>  
  )
  
  export default routing;