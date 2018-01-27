const express = require('express');
const router = express.Router();
const { poolQuery } = require('../helpers');

router.get('/', async (req, res) => {
  const result = [];
  const pollsQuery = `SELECT id, title FROM polls`;
  const polls = await poolQuery(pollsQuery);
  const optionsQuery = `
    SELECT a.id, a.optionNumber, a.label,
      (SELECT COUNT(id) FROM votes WHERE optionId = a.id) AS value
    FROM poll_options a WHERE pollId = ?
    ORDER BY optionNumber
  `;
  for (let i = 0; i < polls.length; i++) {
    const options = await poolQuery(optionsQuery, polls[i].id);
    const [{ numVotes }] = await poolQuery(
      `SELECT COUNT(*) AS numVotes FROM votes WHERE pollId = ?`,
      polls[i].id
    );
    const noVotes = Number(numVotes) === 0;
    result.push(Object.assign({}, polls[i], { options, noVotes }));
  }
  res.send(result);
});

module.exports = router;
