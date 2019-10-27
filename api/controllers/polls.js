const express = require('express');
const router = express.Router();
const { poolQuery } = require('../helpers');
const { requireAuth } = require('../auth');

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

router.post('/', requireAuth, async (req, res) => {
  const { user } = req;
  const { selectedOption, pollId } = req.body;
  const { insertId } = await poolQuery(`INSERT INTO votes SET ?`, {
    pollId: pollId,
    optionId: selectedOption,
    userId: user.id
  });
  res.send({ id: insertId, optionId: selectedOption, pollId: pollId });
});

module.exports = router;
