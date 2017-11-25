import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    votedItem: null,
    hello: false,
    createdPolls : 0
  }

  componentWillMount() {
    const {getVote} = this.props
    getVote('favorite_js_lib')
  }

  render() {
    const {hello, votedItem} = this.state
    return (
      <div className="App">
        <h1 align = "center" id="first_h1">This is a website for making polls and voting for them.</h1>
        <h2 align = "center">Today's poll!</h2>
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
                onClick={() => this.setState({checked: 'Reactgit'})}
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
        <div className="progress">
          {this.renderProgressBars()}
        </div>
        <button onClick={this.createPoll}>
          Create New Poll
        </button>
        {hello && <p>New Poll placeholder</p>}
      </div>
    );
  }

  handleVote = async(event) => {
    event.preventDefault()
    const {votedItem} = this.state
    const {postVote} = this.props
    await postVote(votedItem)
    alert(`Your vote was submitted! You voted ${votedItem}`)
  }

  createPoll = async(event) => {
    event.preventDefault()
    this.setState({hello: true})
    this.setState({createdPolls: 1})    
  }

  renderProgressBars = () => {
    const {votes} = this.props
    const voteArray = [];
    let totalVotes = 0
    const colors = ['success', 'warning', 'info', 'danger', 'primary']
    for (let key in votes) {
      if (votes[key] > 0) voteArray.push({label: key, voteCount: votes[key]})
      totalVotes += votes[key]
    }
    return voteArray.map((element, index) => {
      const percentage = (element.voteCount * 100) / totalVotes
      const {label} = element
      const color = colors[index % 5]
      return (
        <div
          key={label}
          className={`progress-bar bg-${color}`}
          style={{width: `${percentage}%`}}
        >
          {label} ({Math.floor(percentage)}%)
        </div>
      )
    })
  }
}

export default App;
