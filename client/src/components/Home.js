import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Games from './Games';

class Home extends Component {
  
  homePage = () => {
    const { user } = this.props;
    if (user.id) {
      return (
        <div>
          <NavLink to="/Games">Games</NavLink>
          <NavLink to="/Sessions">Sessions</NavLink> 
          <NavLink to="/Friends">Friends</NavLink>
          <NavLink to="/Tools">Tools</NavLink> 
          <NavLink to="/Help">Help</NavLink>
          <NavLink to="/Settings">Settings</NavLink>
          <NavLink to="/Profile">Profile</NavLink>
        </div>
      );
    }
    return (
      <div>
        <Header as='h1' textAlign='center'>Welcome to Board Game Tracker</Header>
        <Header as='h2' textAlign='center'>Please Log In or Register</Header>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.homePage() }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Home);

