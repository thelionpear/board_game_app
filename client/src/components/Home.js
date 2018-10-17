import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Home extends Component {
  
  homePage = () => {
    debugger 
    const { user } = this.props;
    if (user.id) {
      return (
        <div>
          <div>Games</div>
          <div>Sessions</div> 
          <div>Friends</div>
          <div>Tools</div> 
          <div>Help</div>
          <div>Settings</div>
          <div>Profile</div>
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

// const mapStateToProps = state => {
//   return { user: state.user };
// };

export default Home;
