import React, { Component } from 'react';
import Poll from './containers/Poll';
import './App.css';
import SignInModal from './components/SignInModal';

export default class App extends Component {
  state = {
    polls: [],
    modalIsOpen: false
  };

  render() {
    const { polls, modalIsOpen } = this.state;
    return (
      <div className="App">
        <div className="topnav" id="myTopnav">
          <a href="home">Home</a>
          <a href="trend">Now Trending on LolPoll</a>
          <a href="top10">Top 10</a>
          <a href="editors choice">Editor`s Choice</a>
          <a href="settings">Settings</a>
          <a href="temp">temporary</a>
        </div>
        <h1 className="h1appjs" align="center" id="first_h1">
          This is a website for making polls and voting for them!
        </h1>
        <h2 align="center">Today's poll!</h2>
        <Poll />
        <div style={{ marginTop: '1rem' }}>
          <div>
            <button className="login" onClick={this.login}>
              Login
            </button>
          </div>
          <div>
            <button className="create_poll" onClick={this.createPoll}>
              Create New Poll(Under Construction)
            </button>
          </div>
        </div>
        {polls.map((poll, index) => <p key={index + poll}>{poll}</p>)}
        <img
          alt="edit"
          src="http://www.free-icons-download.net/images/tick-pencil-icon-69539.png"
          width="200"
        />
        <SignInModal
          isOpen={modalIsOpen}
          onClose={() => this.setState({ modalIsOpen: false })}
        />
      </div>
    );
  }

  createPoll = event => {
    event.preventDefault();
    this.setState(state => ({
      polls: state.polls.concat(['New Poll placeholder'])
    }));
  };

  login = event => {
    this.setState({ modalIsOpen: true });
  };
}
