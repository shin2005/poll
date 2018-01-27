import React, { Component } from 'react';
import Poll from './Poll';
import request from 'axios';
import URL from '../../../constants/URL';

export default class Home extends Component {
  state = {
    polls: []
  };

  async componentWillMount() {
    const { data: results } = await request.get(`${URL}/polls`);
    const colors = [
      '#FF0000',
      '#FF7F00',
      '#FFFF00',
      '#00FF00',
      '#0000FF',
      '#4B0082',
      '#9400D3'
    ];
    const polls = results.map(result => ({
      ...result,
      options: result.options.map(option => ({
        ...option,
        value: Number(option.value),
        color: colors[option.optionNumber % colors.length]
      }))
    }));
    this.setState({ polls });
  }

  render() {
    const { polls } = this.state;
    return (
      <div style={{ width: '80%' }}>
        {polls.map(poll => {
          return <Poll key={poll.id} poll={poll} />;
        })}
      </div>
    );
  }
}
