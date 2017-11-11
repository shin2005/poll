import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      checked: null,
      dummyData: {
        Mootools: 5,
        Prototype: 3,
        JQ: 13,
        Spry: 4,
        Other: 10
      }
    }
  }

  render() {
    const {checked, dummyData: {Mootools, Prototype, JQ, Spry, Other}} = this.state
    const mootoolsPercentage = Mootools * 100 / (Mootools + Prototype + JQ + Spry + Other)
    const prototypePercentage = Prototype * 100 / (Mootools + Prototype + JQ + Spry + Other)
    const jqueryPercentage = JQ * 100 / (Mootools + Prototype + JQ + Spry + Other)
    const spryPercentage = Spry * 100 / (Mootools + Prototype + JQ + Spry + Other)
    const otherPercentage = Other * 100 / (Mootools + Prototype + JQ + Spry + Other)
    return (
      <div className="App">
        <h1 align = "center" id="first_h1">This is a website for making polls and voting for them.</h1>
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
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: `${mootoolsPercentage}%`}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
          <div className="progress-bar bg-success" role="progressbar" style={{width: `${prototypePercentage}%`}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
          <div className="progress-bar bg-info" role="progressbar" style={{width: `${jqueryPercentage}%`}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          <div className="progress-bar bg-warning" role="progressbar" style={{width: `${spryPercentage}%`}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          <div className="progress-bar bg-danger" role="progressbar" style={{width: `${otherPercentage}%`}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" style={{width: `${mootoolsPercentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" style={{width: `${prototypePercentage}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style={{width: `${jqueryPercentage}%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style={{width: `${spryPercentage}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style={{width: `${otherPercentage}%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
      </div>
    );
  }
}

export default App;
