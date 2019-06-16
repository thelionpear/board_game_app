import React from 'react'; 
import { Form, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

class FriendForm extends Component {
  
  state = {
    name = ""
  }

  handleChange = (e) => {
    const { name, value } = e.target 
    this.setState({ [name]: value })
  }

  canBeSubmitted = () => {
    const { name } = this.state 
    return (
      name.length > 0
    );
  }

  //handlesubmit function 

  render() {
    const { name } = this.state
    const { isEnabled } = this.canBeSubmitted()
    return (
      <Container>
        <Form>
          <Form.Field>
            <label>Name</label>
            <Form.Input
              name="Name"
              value={name}
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