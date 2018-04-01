import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container,Menu,Responsive,Visibility} from 'semantic-ui-react'
class Header extends Component {

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

                </Menu.Item>
              </Container>
            </Menu>
          </Visibility>
        </Responsive>
      </div>
    );
  }
}

export default Header;
