const VotesController = require("../controllers/votes");

module.exports = app => {
  app.get("/votes", VotesController.getVote);
  app.post("/votes", VotesController.postVote);
};
