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
import BoardGameForm from './BoardGameForm';

//AuthRoute is only for making it so the user can't hit the login or register components when logged in
//use Protected route for pages you want the user to be logged in before viewing


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
            <ProtectedRoute exact path='/Friends' component={Friends} /> 
            <ProtectedRoute exact path='/Games' component={Games} />
            <ProtectedRoute exact path='/Help' component={Help} /> 
            <ProtectedRoute exact path='/Settings' component={Settings} />
            <ProtectedRoute exact path='/Tools' component={Tools} />
            <ProtectedRoute exact path='/Sessions' component={Sessions} />
            <ProtectedRoute exact path='/Profile' component={Profile} />
            <ProtectedRoute exact path='/BoardGameForm' component={BoardGameForm} /> 
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
