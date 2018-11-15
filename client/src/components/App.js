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
            <Route exact path='/Friends' component={Friends} /> 
            <Route exact path='/Games' component={Games} />
            <Route exact path='/Help' component={Help} /> 
            <Route exact path='/Settings' component={Settings} />
            <Route exact path='/Tools' component={Tools} />
            <Route exact path='/Sessions' component={Sessions} />
            <Route exact path='/Profile' component={Profile} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
