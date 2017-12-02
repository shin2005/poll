import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getVote, postVote} from './redux/actions/VoteActions'
import './App.css';

class App extends Component {
  state = {
    votedItem: null,
    polls: []
  }

  componentWillMount() {
    const {getVote} = this.props
    getVote('favorite_js_lib')
  }

  render() {
    const {polls, votedItem} = this.state
    return (
      <div className="App" style={{
        backgroundImage: ""
      }}
        >
        <h1 align = "center" id="first_h1">This is a website for making polls and voting for them.</h1>
        <h2 align = "center">Today's poll!</h2>
        <fieldset>
          <legend>What is your JavaScript library of choice? Feel Free To Vote AnyThing you Want :)</legend>
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
            <button disabled={!votedItem} onClick={this.handleVote} className="submit_vote">
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
        {polls.map((poll, index) => <p key={index + poll}>{poll}</p>)}
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
    this.setState(state => ({
      polls: state.polls.concat(['New Poll placeholder'])
    }))
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
