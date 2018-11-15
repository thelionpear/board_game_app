import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
 
class Home extends Component {
  
  homePage = () => {
    const { user } = this.props;
    if (user.id) {
      return (
        //when the Switch was a div, it would flash the /Games for a second but not load anything
        //when div is a Switch I get 
        // React does not recognize the `computedMatch` prop on a DOM element. 
        // If you intentionally want it to appear in the DOM as a custom attribute, 
        // spell it as lowercase `computedmatch` instead. 
        // If you accidentally passed it from a parent component, 
        // remove it from the DOM element.
        //these start to work when I remove Auth from AuthRoute in App.js
        
        <div>
          <div>
            <NavLink to="/Games">Games</NavLink>
          </div>
          <div>
            <NavLink to="/Sessions">Sessions</NavLink> 
          </div>
          <div>
            <NavLink to="/Friends">Friends</NavLink>
          </div>
          <div>
            <NavLink to="/Tools">Tools</NavLink> 
          </div>
          <div>
            <NavLink to="/Help">Help</NavLink>
          </div>
          <div>
            <NavLink to="/Settings">Settings</NavLink>
          </div>
          <div>
            <NavLink to="/Profile">Profile</NavLink>
          </div>
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

