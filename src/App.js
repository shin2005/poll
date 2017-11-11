import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      checked: null
    }
  }

  render() {
    const {checked} = this.state
    return (
      <div className="App">
        <h1 align = "center">This is a website for making polls and voting for them.</h1>
        <h3 align = "center">Go on, try voting for this sample poll!</h3>
        <fieldset>
          <legend>What is your JavaScript library of choice?</legend>
          <form id="form1" name="form1">
            <label>
              <input
                type="radio"
                checked={checked === 'Mootools'}
                onClick={() => this.setState({checked: 'Mootools'})}
              />
              Mootools
            </label>
            <label>
              <input
                type="radio"
                checked={checked === 'Prototype'}
                onClick={() => this.setState({checked: 'Prototype'})}
              />
              Prototype
            </label>
            <label>
              <input
                type="radio"
                checked={checked === 'jQuery'}
                onClick={() => this.setState({checked: 'jQuery'})}
              />
              jQuery
            </label>
            <label>
              <input
                type="radio"
                checked={checked === 'Spry'}
                onClick={() => this.setState({checked: 'Spry'})}
              />
              Spry
            </label>
            <label>
              <input
                type="radio"
                checked={checked === 'React'}
                onClick={() => this.setState({checked: 'React'})}
              />
              React
            </label>
            <label>
              <input
                type="radio"
                checked={checked === 'Other'}
                onClick={() => this.setState({checked: 'Other'})}
              />
              Other
            </label>
            <button onClick={
              (event) => {
                event.preventDefault() // to prevent default behavior of form submission. see what happens if you remove this line
                alert(`Your vote was submitted! You voted ${checked}`)}
              }
            >
              Vote
            </button>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default App;
