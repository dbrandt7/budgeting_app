import React, { Component } from 'react';
import './App.css';
import Users from './components/Users'
import CreateTransaction from './components/CreateTransaction'

class App extends Component {
  render() {
    return (
      <CreateTransaction />
    );
  }
}

export default App;
