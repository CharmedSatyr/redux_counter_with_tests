import React from 'react';
import logo from './logo.svg';
import './App.css';

import ConnectedCounter from '../containers/CounterContainer';

const App = ({ decrement, increment, value }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Rescue Prince Few</h1>
      </header>
      <div className="App-intro">
        <ConnectedCounter />
      </div>
    </div>
  );
};

export default App;
