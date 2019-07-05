import React, { Component } from 'react'; 
import { Button, Form, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setFlash } from '../reducers/flash';


class FriendForm extends Component {
  
  state = {
    name: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target 
    this.setState({ [name]: value })
  }

  // canBeSubmitted = () => {
  //   const { name } = this.state; 
  //   return (
  //     name.length > 0
  //   );
  // }

  handleSubmit = (e) => {
    const { name } = this.state 
    const { dispatch } = this.props
    const userId = this.props.user.id 
    // if (this.canBeSubmitted()) {
      axios.post(`/api/users/${userId}/friends`, {
        name,
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.props.history.push('/Friends');
          dispatch(setFlash('Friend added succesfully', 'green'))
        }
        else {
          dispatch(setFlash('Failed to add friend to database', 'red'))
        }
      })
      return 
    // }
  }

  render() {
    const { name } = this.state
    // const { isEnabled } = this.canBeSubmitted()
    return (
      <Container>
        <Form>
          <Form.Field>
            <label>Name</label>
            <Form.Input
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </Form.Field>
        </Form>
        {/* <Button disabled={!isEnabled} type="submit" onClick={() => this.handleSubmit()}>Submit</Button> */}
        <Button type="submit" onClick={() => this.handleSubmit()}>Submit</Button>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
}

export default connect(mapStateToProps)(FriendForm);