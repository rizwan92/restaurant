import React, { Component } from 'react';
import { Container, Form } from 'semantic-ui-react'

class SignUpForm extends Component {

  render() {
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ]
    return (
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
          <Form.Button>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}

export default SignUpForm;
