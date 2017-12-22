import React from 'react';

export default function VoteOptions({
  handleVote,
  onClickOption,
  options,
  votedItem
}) {
  return (
    <fieldset>
      <legend>
        What is your JavaScript library of choice? Feel Free To Vote AnyThing
        you Want :)
      </legend>
      <form id="form1" name="form1">
        {options.map(option => (
          <label key={option.id}>
            <input
              type="radio"
              checked={votedItem === option.label}
              onClick={() => onClickOption(option.label)}
            />
            {option.label}
          </label>
        ))}
        <button
          disabled={!votedItem}
          onClick={handleVote}
          className="submit_vote"
        >
          Vote
        </button>
      </form>
    </fieldset>
  );
}
