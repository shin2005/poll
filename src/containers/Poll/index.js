import React, { Component } from 'react';
import VoteOptions from './VoteOptions';
import ProgressBar from './ProgressBar';
import { getVote, postVote } from '../../redux/actions/VoteActions';
import { connect } from 'react-redux';

class Poll extends Component {
  state = {
    votedItem: null
  };

  componentWillMount() {
    const { getVote } = this.props;
    getVote('favorite_js_lib');
  }

  render() {
    const { votes } = this.props;
    const { votedItem } = this.state;
    const options = [
      { id: 1, label: 'Mootools' },
      { id: 2, label: 'Prototype' },
      { id: 3, label: 'JQ' },
      { id: 4, label: 'Spry' },
      { id: 5, label: 'React' },
      { id: 6, label: 'Other' }
    ];
    return (
      <div>
        <VoteOptions
          handleVote={this.handleVote}
          options={options}
          onClickOption={option => this.setState({ votedItem: option })}
          votedItem={votedItem}
        />
        <ProgressBar votes={votes} />
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
}

export default connect(state => ({ votes: state.VoteReducer.votes }), {
  getVote,
  postVote
})(Poll);
