import React, { Component } from 'react';
import PollMenu from './PollMenu';
import PieChart from 'react-minimal-pie-chart';

export default class Poll extends Component {
  render() {
    const { poll } = this.props;
    return (
      <div style={{ width: '100%', padding: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {poll.noVotes ? (
            <div style={{ width: '30%', textAlign: 'center' }}>No votes</div>
          ) : (
            <PieChart style={{ width: '30%' }} data={poll.options} />
          )}
          <PollMenu
            style={{
              width: '70%',
              display: 'flex',
              justifyContent: 'center'
            }}
            poll={poll}
          />
        </div>
      </div>
    );
  }
}
