import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Friends from './Friends';
import Games from './Games'; 
import Help from './Help'; 
import Profile from './Profile'; 
import Settings from './Settings'; 
import Tools from './Tools'; 
import Sessions from './Sessions'; 

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <AuthRoute exact path='/Friends' component={Friends} /> 
            <AuthRoute exact path='/Games' component={Games} />
            <AuthRoute exact path='/Help' component={Help} /> 
            <AuthRoute exact path='/Settings' component={Settings} />
            <AuthRoute exact path='/Tools' component={Tools} />
            <AuthRoute exact path='/Sessions' component={Sessions} />
            <AuthRoute exact path='/Profile' component={Profile} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
