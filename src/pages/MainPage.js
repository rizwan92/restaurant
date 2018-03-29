import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button , Icon } from 'semantic-ui-react'

class MainPage extends Component {

  render() {
    return (
      <div>
        <Header />
        <Button animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden><Icon name="comments" /></Button.Content>
        </Button>
        <Icon name="comments"  bordered={false}  size="massive" loading={true}/>
        <Footer />
      </div>
    );
  }

}

export default MainPage;
