const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/local";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "5mb" }));
const PORT = 3500;

routes(app);
const http = require("http").Server(app);

http.listen(PORT, function() {
  console.log("Server listening on api port:", PORT);
});
