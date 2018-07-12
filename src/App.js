import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import RequestFrom from './RequestForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button
          color='primary'
        >Submit</Button>
        <Input/>
        <RequestFrom/>
      </div>
    );
  }
}

export default App;
