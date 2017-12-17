import React, { Component } from "react";
import { connect } from "react-redux";
import { getVote, postVote } from "./redux/actions/VoteActions";
import ProgressBar from "./components/ProgressBar";
import VoteOptions from "./components/VoteOptions";
import "./App.css";

class App extends Component {
  state = {
    votedItem: null,
    polls: []
  };

  componentWillMount() {
    const { getVote } = this.props;
    getVote("favorite_js_lib");
  }

  render() {
    const { votes } = this.props;
    const { polls, votedItem } = this.state;
    return (
      <div className="App">
        <div className="topnav" id="myTopnav">
          <a href="home">Home</a>
          <a href="trend">Now Trending on LolPoll</a>
          <a href="top10">Top 10</a>
          <a href="editors choice">Editor`s Choice</a>
          <a href="settings">Settings</a>
        </div>
        <h1 
          className="h1appjs"
            align="center" id="first_h1">
          This is a website for making polls and voting for them!
        </h1>
        <h2 align="center">Today's poll!</h2>
        <VoteOptions
          handleVote={this.handleVote}
          onClickMooTools={() => this.setState({ votedItem: "Mootools" })}
          onClickProtoType={() => this.setState({ votedItem: "Prototype" })}
          onClickJQ={() => this.setState({ votedItem: "JQ" })}
          onClickSpry={() => this.setState({ votedItem: "Spry" })}
          onClickReact={() => this.setState({ votedItem: "React" })}
          onClickOther={() => this.setState({ votedItem: "Other" })}
          votedItem={votedItem}
        />
        <ProgressBar votes={votes} />
        <button className="create_poll" onClick={this.createPoll}>
          Create New Poll(Under Developement)
        </button>
        {polls.map((poll, index) => <p key={index + poll}>{poll}</p>)}
        <img src="http://www.free-icons-download.net/images/tick-pencil-icon-69539.png" width="200"/>
      </div>
    );
  }

  handleVote = async event => {
    event.preventDefault();
    const { votedItem } = this.state;
    const { postVote } = this.props;
    await postVote(votedItem);
    alert(`Your vote has been submitted! You voted ${votedItem}`);
  };

  createPoll = async event => {
    event.preventDefault();
    this.setState(state => ({
      polls: state.polls.concat(["New Poll placeholder"])
    }));
  };
 
}

export default connect(state => ({ votes: state.VoteReducer.votes }), {
  getVote,
  postVote
})(App);
