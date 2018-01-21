import React, { Component } from 'react';
import Poll from './Poll';

export default class Home extends Component {
  render() {
    const polls = [
      {
        id: 1,
        title: 'This is a sample poll',
        options: [
          { id: 1, label: 'Data 1', value: 20, color: 'red' },
          { id: 2, label: 'Data 2', value: 60, color: 'yellow' },
          { id: 3, label: 'Data 3', value: 30, color: 'orange' },
          { id: 4, label: 'Data 4', value: 20, color: 'blue' },
          { id: 5, label: 'Data 5', value: 10, color: 'green' }
        ]
      },
      {
        id: 2,
        title: 'This is a sample poll',
        options: [
          { id: 1, label: 'Data 1', value: 20, color: 'red' },
          { id: 2, label: 'Data 2', value: 60, color: 'yellow' },
          { id: 3, label: 'Data 3', value: 30, color: 'orange' },
          { id: 4, label: 'Data 4', value: 20, color: 'blue' },
          { id: 5, label: 'Data 5', value: 10, color: 'green' }
        ]
      },
      {
        id: 3,
        title: 'This is a sample poll',
        options: [
          { id: 1, label: 'Data 1', value: 20, color: 'red' },
          { id: 2, label: 'Data 2', value: 60, color: 'yellow' },
          { id: 3, label: 'Data 3', value: 30, color: 'orange' },
          { id: 4, label: 'Data 4', value: 20, color: 'blue' },
          { id: 5, label: 'Data 5', value: 10, color: 'green' }
        ]
      }
    ];
    return (
      <div style={{ width: '80%' }}>
        {polls.map(poll => {
          return <Poll key={poll.id} poll={poll} />;
        })}
      </div>
    );
  }
}
