const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  topic: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  }
});

const Vote = mongoose.model("vote", VoteSchema);

module.exports = Vote;
