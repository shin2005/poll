import React, { Component } from 'react';
import PollMenu from './PollMenu';
import PieChart from 'react-minimal-pie-chart';

export default class Poll extends Component {
  render() {
    const poll = {
      title: 'This is a sample poll',
      options: [
        { id: 1, label: 'Data 1', value: 20, color: 'red' },
        { id: 2, label: 'Data 2', value: 60, color: 'yellow' },
        { id: 3, label: 'Data 3', value: 30, color: 'orange' },
        { id: 4, label: 'Data 4', value: 20, color: 'blue' },
        { id: 5, label: 'Data 5', value: 10, color: 'green' }
      ]
    }
    return (
      <div style={{ width: '100%', padding: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PieChart style={{ width: '30%' }} data={poll.options} />
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

