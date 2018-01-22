const express = require('express');
const router = express.Router();
const { poolQuery } = require('../helpers');
const passwordHash = require('password-hash');
const { requireAuth, requireSignin, tokenForUser } = require('../auth');

router.get('/', requireSignin, async (req, res) => {
  const { user } = req;
  res.send({
    token: tokenForUser(user.id),
    userId: user.id,
    username: user.username
  });
});

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [user = null] = await poolQuery(
      `SELECT id FROM users WHERE username = ?`,
      username
    );
    if (user) {
      return res.send({ alreadyExists: true });
    }
    const { insertId } = await poolQuery(`INSERT INTO users SET ?`, {
      username,
      password: passwordHash.generate(password)
    });
    res.send({ token: tokenForUser(insertId), userId: insertId });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
});

router.get('/session', requireAuth, async (req, res) => {
  const { user } = req;
  res.send({ userId: user.id, username: user.username });
});

module.exports = router;
