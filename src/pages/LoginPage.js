import React, { Component } from 'react';
import { Container, Button, Checkbox, Form, Divider, Icon} from 'semantic-ui-react'

class LoginPage extends Component {

  render() {
    return (
      <div>  <Container textAlign='center'>
      <h1>Registration Form</h1>
    </Container>
      <Container>
      <Form>
      <Form.Field>
     <label>email id </label>
      <input iconPosition='left' Icon name='at' placeholder='email id' />
    </Form.Field>
   <Form.Field>
  <label>password</label>
  <input type='password' placeholder='password' />
      </Form.Field>
   <Button primary fluid>Login</Button>
  <Divider horizontal>Or</Divider>
  <Button secondary fluid>Sign Up Now</Button>
     </Form>
      </Container>
 )
   </div>
    );
  }

}

export default LoginPage;
