const express = require('express');
const router = express.Router();
const { poolQuery } = require('../helpers');
const passwordHash = require('password-hash');
const { requireAuth, requireSignin, tokenForUser } = require('../auth');

router.post('/', (req, res) => {
  res.send({result: 'nothing to see'})
});

module.exports = router;