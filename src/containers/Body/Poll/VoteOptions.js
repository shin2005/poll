import React from 'react';

export default function VoteOptions({
  handleVote,
  onClickOption,
  options,
  style,
  votedItem
}) {
  return (
    <div style={style}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
        {options.map(option => (
          <label key={option.id}>
            <input
              type="radio"
              checked={votedItem === option.label}
              onClick={() => onClickOption(option.label)}
            />
            &nbsp;&nbsp;{option.label}
          </label>
        ))}
        <button
          disabled={!votedItem}
          onClick={handleVote}
          className="submit_vote"
        >
          Vote
        </button>
      </div>
    </div>
  );
}
