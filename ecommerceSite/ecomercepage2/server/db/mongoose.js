var mongoose = require("mongoose");
//database
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/birthstones",
  { useNewUrlParser: true }
);

module.exports = { mongoose };