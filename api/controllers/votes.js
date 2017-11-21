const Vote = require('../models/votes');

module.exports = {
  async postVote(req, res, next) {
    const {votedItem} = req.body;
    try {
      const vote = new Vote({topic: 'favorite_js_lib', item: votedItem})
      await vote.save()
      const result = await Vote.find({topic: 'favorite_js_lib'})
      res.send(result)
    } catch (error) {
      console.error(error)
      next()
    }
  },

  async getVote(req, res, next) {
    try {
      const result = await Vote.find({topic: 'favorite_js_lib'})
      res.send(result)
    } catch (error) {
      console.error(error)
      next()
    }
  }
}
