import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 align = "center">This is a website for making polls and voting for them.</h1>
        <h3 align = "center">Go on, try voting for this sample poll!</h3>
        <fieldset>
          <legend>What is your JavaScript library of choice?</legend>
          <form id="form1" name="form1">
            <label>
              <input type="radio" name="Poll" value="mootools" id="Poll_0" />
              Mootools
            </label>
            <label>
              <input type="radio" name="Poll" value="prototype" id="Poll_1" />
              Prototype
            </label>
            <label>
              <input type="radio" name="Poll" value="jquery" id="Poll_2" />
              jQuery
            </label>
            <label>
              <input type="radio" name="Poll" value="spry" id="Poll_3" />
              Spry
            </label>
            <label>
              <input type="radio" name="Poll" value="other" id="Poll_4" />
              Other
            </label>
           <button onClick={() => alert('Your vote was submitted!')}>Vote</button>
         </form>
       </fieldset>
      </div>
    );
  }
}

export default App;
