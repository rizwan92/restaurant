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
      <Container textAlign='center' >
      <h1>registration Form</h1> </Container>
<Container style={{width:400}}>
      <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
              <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
            <Form.Button>Submit</Form.Button> <a href='login'>
            <Container textAlign='right'>Login  </Container> </a>


            </Form>
              </Container>
        </div>
    );
  }
}

export default Signup;
