import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container,Menu,Responsive,Visibility,Icon, Header, Image, Modal} from 'semantic-ui-react'
class MyHeader extends Component {
  state={
    modalOpen:false
  }

  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
            <Menu style={{height:'50px'}} >
              <Container>
                <img src="https://image.freepik.com/free-icon/twitter-logo_318-40459.jpg" style={{height:'auto',width:'50px'}} />
                <Menu.Item position='right'>
                  <Menu.Item as='a' > <Link to="/">Home</Link></Menu.Item>
                  <Menu.Item as='a' > <Link to="/login">Log in</Link></Menu.Item>
                  <Menu.Item as='a' > <a onClick={()=>this.setState({modalOpen:!this.state.modalOpen})}>Products</a></Menu.Item>

                </Menu.Item>
              </Container>
            </Menu>
          </Visibility>
        </Responsive>

        <Modal open={this.state.modalOpen}>
          <Modal.Header ><Icon name="remove" style={{cursor:'pointer'}} size="large" onClick={()=>this.setState({modalOpen:false})}/></Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We ve found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>

      </div>
    );
  }
}

export default MyHeader;
