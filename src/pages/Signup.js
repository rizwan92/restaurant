import React, { Component } from 'react';
import { Container, Form } from 'semantic-ui-react'
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class Signup extends Component {

  render() {
    return (
      <div>
      <Container textAlign='center'>
      <h1>Signup Form</h1>

      <Form>
              <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='First name' />
                <Form.Input fluid label='Last name' placeholder='Last name' />
                <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
              </Form.Group>
              <Form.Button>Submit</Form.Button>
            </Form>
              </Container>
        </div>
    );
  }

}

export default Signup;
