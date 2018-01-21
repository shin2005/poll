import React, { Component } from 'react';
import VoteOptions from './VoteOptions';
import { getVote, postVote } from '../../../redux/actions/VoteActions';
import { connect } from 'react-redux';
import PieChart from 'react-minimal-pie-chart';

class Poll extends Component {
  render() {
    const options = [
      { id: 1, label: 'Data 1', value: 20, color: 'red' },
      { id: 2, label: 'Data 2', value: 60, color: 'yellow' },
      { id: 3, label: 'Data 3', value: 30, color: 'orange' },
      { id: 4, label: 'Data 4', value: 20, color: 'blue' },
      { id: 5, label: 'Data 5', value: 10, color: 'green' }
    ];
    const pollTitle = 'This is a sample poll title';
    return (
      <div style={{ width: '100%', padding: '1rem' }}>
        <div
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem'
          }}
        >
          <h3>{pollTitle}</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PieChart style={{ width: '30%' }} data={options} />
          <VoteOptions
            style={{
              width: '70%',
              display: 'flex',
              justifyContent: 'center'
            }}
            handleVote={this.handleVote}
            options={options}
            onClickOption={option => this.setState({ votedItem: option })}
          />
        </div>
      </div>
    );
  }
}

export default connect(state => ({ votes: state.VoteReducer.votes }), {
  getVote,
  postVote
})(Poll);
