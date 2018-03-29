import React, { Component } from 'react';
import { Container, Button, Form} from 'semantic-ui-react'

class LoginPage extends Component {

  render() {
    return (
      <div>  <Container textAlign='center' >
      <h1>Login Form</h1>
    </Container>
      <Container style={{width:400}}>
      <Form>
      <Form.Field>
     <label>email id </label>
      <input iconPosition='left' Icon name='at' placeholder='email id' />
    </Form.Field>
   <Form.Field>
  <label>password</label>
  <input type='password' placeholder='password' />
      </Form.Field>
   <Button primary fluid style={{width:100}}>Login</Button><a href='Signup'>
   <Container textAlign='right'>
      registration
    </Container>
 </a>


     </Form>
      </Container>
 )
   </div>
    );
  }

}

export default LoginPage;
