import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getVote, postVote} from './redux/actions/VoteActions'
import './App.css';

class App extends Component {
  state = {
    votedItem: null,
    hello: false
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
        <h3 align = "center">Go on, try voting for this sample poll!</h3>
        <fieldset>
          <legend>What is your JavaScript library of choice?</legend>
          <form id="form1" name="form1">
            <label>
              <input
                type="radio"
                checked={votedItem === 'Mootools'}
                onClick={() => this.setState({votedItem: 'Mootools'})}
              />
              Mootools
            </label>
            <label>
              <input
                type="radio"
                checked={votedItem === 'Prototype'}
                onClick={() => this.setState({votedItem: 'Prototype'})}
              />
              Prototype
            </label>
            <label>
              <input
                type="radio"
                checked={votedItem === 'JQ'}
                onClick={() => this.setState({votedItem: 'JQ'})}
              />
              jQuery
            </label>
            <label>
              <input
                type="radio"
                checked={votedItem === 'Spry'}
                onClick={() => this.setState({votedItem: 'Spry'})}
              />
              Spry
            </label>
            <label>
              <input
                type="radio"
                checked={votedItem === 'React'}
                onClick={() => this.setState({votedItem: 'React'})}
              />
              React
            </label>
            <label>
              <input
                type="radio"
                checked={votedItem === 'Other'}
                onClick={() => this.setState({votedItem: 'Other'})}
              />
              Other
            </label>
            <button disabled={!votedItem} onClick={this.handleVote}>
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
        {hello && <h1>hello world</h1>}
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
    alert('This is not made yet!')
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

export default connect(
  state => ({votes: state.VoteReducer.votes}),
  {getVote, postVote}
)(App);
