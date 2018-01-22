const express = require('express')
const router = express.Router()
const { poolQuery } = require('../helpers');

router.get('/', (req, res) => {
  console.log('got here')
  res.send({success: true})
})

module.exports = router
