import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getVote, postVote} from './redux/actions/VoteActions'
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
        <h2 align = "center">Vote for the best Poll</h2>
        <fieldset>
          <legend>What is your JavaScript library of choice?????</legend>
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
        <button className="create_poll" onClick={this.createPoll}>
          Create New Poll
        </button>
        {hello && <p>New Poll placeholder</p>}
      </div>
    );
    <img src="data:image/png;base64,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"/>
    
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

export default connect(
  state => ({votes: state.VoteReducer.votes}),
  {getVote, postVote}
)(App);
