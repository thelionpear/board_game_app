//so this form needs to allow you to add the date, 
//players on a through table with their scores  
//a dropdown to select the game
//some way of marking the winner or else
//that it's a cooperative game 

import React, { Component } from 'react'; 
import { Form, Button, Container, Dropdown } from 'semantic-ui-react'; 
import { connect } from 'react-redux'; 
import axios from 'axios'; 
import { setFlash } from '../reducers/flash'; 
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class RoundForm extends Component { 
  
  state = { 
    players: "", 
    scores: "", 
    user_games: [], 
    winner: "", 
    startDate: new Date(),
    date: "", 
  }
  
  componentDidMount() {
    const userId = this.props.user.id 
    axios.get(`/api/users/${userId}/board_games/`)
    .then(res => {
      console.log(res.data);
      this.setState({user_games: res.data});
    })
  }
  
  //takes games and makes options out of them
  // gameOptionsDropdown = () => {
  //   const {user_games} = this.state 
  //   return user_games.map( user_games =>
  //     <Dropdown 
  //     key: {user_games.title}, 
  //     text: {user_games.title},
  //     value: {user_games.title},
  //     /> 
  //   ) 
    
  // }
  

//handle change of the react-datepicker
  handleChange = this.handleChange

  handleChange= (date) => {
    this.setState({
      startDate: date,
      date: date 
    });
  }



//we don't have players yet, but when we do, need an axios.get
//to grab them 
  
  render() {
    const {user_games} = this.state 
    return (
      <Container>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />          
        <Form>
          <Form.Field>
            <Dropdown 
              placeholder="Select Game"
              fluid 
              selection
              options={user_games.title}
            />
          </Form.Field>
          <Form.Field>
            <label>Player Dropdown with option to add more</label>
            <Form.Input 
              name="score" 
              />
          </Form.Field>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(RoundForm);