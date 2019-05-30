//so this form needs to allow you to add the date, 
//players on a through table with their scores  
//a dropdown to select the game
//some way of marking the winner or else
//that it's a cooperative game 

import React, { Component } from 'react'; 
import { Form, Button, Container } from 'semantic-ui-react'; 
import { connect } from 'react-redux'; 
import { axios } from 'axios'; 
import { setFlash } from '../reducers/flash'; 
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class RoundForm extends Component { 
  
  state = { date: "", 
            players: "", 
            scores: "", 
            game: "", 
            winner: "", 
  }

  render() {
    return (
      <Container>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />          
        <Form>
          <Form.Field>
            <label>Board Game Dropdown</label>
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