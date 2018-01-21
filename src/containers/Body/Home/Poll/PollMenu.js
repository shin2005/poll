import React from 'react';

export default function PollMenu({
  handleVote,
  onClickOption,
  poll: { title, options },
  style,
  votedItem
}) {
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
              checked={votedItem === option.label}
              onClick={() => console.log('clicked menu')}
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
