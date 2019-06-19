import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setFlash } from '../reducers/flash'

class BoardGameForm extends Component {
  
  state = { title: "", 
            max_players: "", 
            min_players: "", 
            company: "", 
            time_needed: "",
          }
  
  handleSubmit = (e) => {
    const { title,
            min_players, 
            max_players, 
            company, 
            time_needed 
          } = this.state 
    const { dispatch } = this.props 
    if (this.canBeSubmitted()) {
      // e.preventDefault(); 
      axios.post("/api/board_games", {
        title, 
        min_players,
        max_players,
        company,
        time_needed
      }).then(res => {
        console.log(res); 
        if (res.status === 200) {
          this.props.history.push('/');
          dispatch(setFlash('Game added succesfully', 'green'))
        }
        else {
          dispatch(setFlash('Failed to Add Game to Database', 'red'))
        }
      })
      return;
    }
  }
  
  
  canBeSubmitted = () => {
   const {title, max_players, min_players, time_needed } = this.state; 
    return(
        title.length > 0 &&
        max_players.length > 0 &&
        min_players.length > 0 &&
        time_needed.length > 0 
    );
  }
  
  handleChange = (e) => {
    const { name, value } = e.target 
    this.setState({ [name]: value })
  }


  render() {
  const { isEnabled } = this.canBeSubmitted() 
  const {title, max_players, min_players, company, time_needed } = this.state 
    return (
      <Container > 
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <Form.Input 
              name="title"
              value={title} 
              onChange={this.handleChange}
              required
            /> 
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Min Players</label>
              <Form.Input 
                name="min_players"
                value={min_players}
                onChange={this.handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Max Players</label>
              <Form.Input 
                name="max_players"
                value={max_players}
                onChange={this.handleChange}
                required 
              /> 
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Game Company</label>
            <Form.Input 
              name="company"
              value={company}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Time Needed</label>
            <Form.Input 
              name="time_needed"
              value={time_needed}
              onChange={this.handleChange}
              required
            /> 
          </Form.Field>
        </Form>
        <Button disabled={!isEnabled} type="submit" onClick={() => this.handleSubmit()}>Submit</Button>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(BoardGameForm);