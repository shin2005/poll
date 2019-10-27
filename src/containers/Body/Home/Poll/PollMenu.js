import React, { Component } from 'react';

export default class PollMenu extends Component {
  state = {
    selectedOption: 0
  };

  render() {
    const {
      onClickOption,
      poll: { id, title, options },
      style,
      votedItem
    } = this.props;
    const { selectedOption } = this.state;
    return (
      <div style={style}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {title}
            </span>
          </div>
          {options.map(option => (
            <label key={option.id}>
              <input
                type="radio"
                checked={selectedOption === option.id}
                onClick={() => this.setState({ selectedOption: option.id })}
              />
              &nbsp;&nbsp;{option.label}
            </label>
          ))}
          <button
            disabled={selectedOption === 0}
            onClick={this.onClickSubmit}
            className="submit_vote"
          >
            Vote Here!
          </button>
        </div>
      </div>
    );
  }

  onClickSubmit = () => {
    const { selectedOption } = this.state;
    const { poll: { id }, handleVote } = this.props;
    handleVote({ selectedOption, pollId: id });
  };
}
