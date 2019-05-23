import React, { Component } from 'react'; 
import {Form, Button, Container } from 'semantic-ui-react'; 
import { connect } from 'react-redux'; 
import { axios } from axios; 
import { setFlash } from '..reducers/flash'; 

class SessionForm extends Component {

  state = { date: "", 
            players: "",

          }

  render() {
    return ( 
      <Container> 
        calendar for selecting date 

        player dropdown select 
        + add another player 

          
      </Container>
    )
  }
}