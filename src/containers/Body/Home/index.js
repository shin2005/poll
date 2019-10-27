import React, { Component } from 'react';
import Poll from './Poll';
import request from 'axios';
import URL from '../../../constants/URL';
import auth from '../../../constants/auth';

export default class Home extends Component {
  state = {
    polls: []
  };

  async componentDidMount() {
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
          return (
            <Poll key={poll.id} poll={poll} handleVote={this.handleVote} />
          );
        })}
      </div>
    );
  }

  handleVote = async ({ selectedOption, pollId }) => {
    const { polls } = this.state;
    const { data } = await request.post(
      `${URL}/polls`,
      { selectedOption, pollId },
      auth()
    );
    const { optionId } = data;
    this.setState(state => ({
      polls: state.polls.map(poll => {
        return {
          ...poll,
          noVotes: false,
          options:
            poll.id === pollId
              ? poll.options.map(option => {
                  return {
                    ...option,
                    value:
                      option.id === selectedOption
                        ? option.value + 1
                        : option.value
                  };
                })
              : poll.options
        };
      })
    }));
  };
}
