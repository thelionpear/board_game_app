import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';


export default class BoardGameForm extends Component {
  render() {
    return (
      <Container > 
        <Form>
          <Form.Field>
            <label>Title</label>
            <input /> 
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Max Players</label>
              <input /> 
            </Form.Field>
            <Form.Field>
              <label>Min Players</label>
              <input />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Game Company</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Time Needed</label>
            <input /> 
          </Form.Field>
        </Form>
        <Button>Submit</Button>
      </Container>
    )
  }
}
