import React from 'react'

export default function VoteOptions({
    handleVote,
    onClickMooTools,
    onClickProtoType,
    onClickJQ,
    onClickSpry,
    onClickReact,
    onClickOther,
    votedItem
<<<<<<< HEAD
}) {
    return (
      <fieldset>
        <legend>What is your JavaScript library of choice? Feel Free To Vote AnyThing you Want :)</legend>
        <form id="form1" name="form1">
          <label>
            <input
              type="radio"
              checked={votedItem === 'Mootools'}
              onClick={onClickMooTools}
            />
            Mootools
          </label>
          <label>
            <input
              type="radio"
              checked={votedItem === 'Prototype'}
              onClick={onClickProtoType}
            />
            Prototype
          </label>
          <label>
            <input
              type="radio"
              checked={votedItem === 'JQ'}
              onClick={onClickJQ}
            />
            jQuery
          </label>
          <label>
            <input
              type="radio"
              checked={votedItem === 'Spry'}
              onClick={onClickSpry}
            />
            Spry
          </label>
          <label>
            <input
              type="radio"
              checked={votedItem === 'React'}
              onClick={onClickReact}
            />
            React
          </label>
          <label>
            <input
              type="radio"
              checked={votedItem === 'Other'}
              onClick={onClickOther}
            />
            Other
          </label>
        <button disabled={!votedItem} onClick={handleVote} className="submit_vote">
            Vote
=======
  }) {
  return (
    <fieldset>
      <legend>What is your JavaScript library of choice? Feel Free To Vote AnyThing you Want :)</legend>
      <form id="form1" name="form1">
        <label>
          <input
            type="radio"
            checked={votedItem === 'Mootools'}
            onClick={onClickMooTools}
          />
          Mootools
        </label>
        <label>
          <input
            type="radio"
            checked={votedItem === 'Prototype'}
            onClick={onClickProtoType}
          />
          Prototype
        </label>
        <label>
          <input
            type="radio"
            checked={votedItem === 'JQ'}
            onClick={onClickJQ}
          />
          jQuery
        </label>
        <label>
          <input
            type="radio"
            checked={votedItem === 'Spry'}
            onClick={onClickSpry}
          />
          Spry
        </label>
        <label>
          <input
            type="radio"
            checked={votedItem === 'React'}
            onClick={onClickReact}
          />
          React
        </label>
        <label>
          <input
            type="radio"
            checked={votedItem === 'Other'}
            onClick={onClickOther}
          />
          Other
        </label>
        <button disabled={!votedItem} onClick={handleVote} className="submit_vote">
          Vote
>>>>>>> upstream/master
        </button>
      </form>
    </fieldset>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> upstream/master
