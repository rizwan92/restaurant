import React, { Component } from 'react';
import {  Route }  from 'react-router-dom';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={Signup} />
      </div>
    );
  }
}

export default App;
