import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{textAlign: 'center'}} className="App-header">
          <div style={{
            backgroundColor: 'black'
          }}>
          <h1 className="Twin-kle">Twin-kle is amazing!</h1>
          <h2>hi</h2>
          </div>
        </header>
        <div>
          <h1 style={{textAlign: 'center'}}>
            Twin-kle is an English academy spotted in Seoul, a city in South Korea.
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
