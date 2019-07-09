import React, { Component } from "react"; 
import { Button, Container, Dropdown, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios" ;
import { connect } from 'react-redux';


class Friends extends Component {

  state = {
    friends:[],
    sort: 'A-Z',
  }

  componentDidMount() {
    const userId = this.props.user.id 
    axios.get(`/api/users/${userId}/friends`)
      .then(res => {
        console.log(res.data) 
        this.setState({friends: res.data}); 
      })
  }
  
  dropDownMenu = () => {
    return ( <Dropdown text='sort'>
              <Dropdown.Menu>
                <Dropdown.Item text='A-Z' onClick={() => this.setState({sort:'A-Z'}) } />
                <Dropdown.Item text='Z-A' onClick={() => this.setState({sort:'Z-A'}) } />
              </Dropdown.Menu>
             </Dropdown>)
  }

  userFriends = () => {
    const {friends, sort} = this.state 
    switch(sort) {
      case 'A-Z':
      friends.sort(function(friend1, friend2){
        if(friend1.manual_friend_name < friend2.manual_friend_name) {return -1; }
        if(friend1.manual_friend_name > friend2.manual_friend_name) {return 1; }
        return 0; 
      });
      break; 
      case 'Z-A': 
      friends.sort(function(friend1, friend2){
        if(friend1.manual_friend_name < friend2.manual_friend_name) {return -1; }
        if(friend1.manual_friend_name > friend2.manual_friend_name) {return 1; }
        return 0;
      });
      break; 
      default: 
      friends.sort(function(friend1, friend2){
        if(friend1.manual_friend_name < friend2.manual_friend_name) {return -1; }
        if(friend1.manual_friend_name > friend2.manual_friend_name) {return 1; }
        return 0; 
      });
    }
  }

  friendsList = () => {
    const { friends } = this.state 
    return friends.map( friend => 
      <div key={friend.id}>{friend.manual_friend_name}</div>)
  }

  render() {
    return(
      <Container>
        <h1>Friends</h1>
        <Grid>
          <Grid.Column floated="left" width={2}> 
            <h3>Your Friends</h3>
            {this.dropDownMenu()}
            {this.friendsList()}
          </Grid.Column> 
          <Grid.Column floated="right" width={2}>
            <Button as={ Link } to="/FriendForm" basic color="blue">Add a Friend</Button>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Friends); 