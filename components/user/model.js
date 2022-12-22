const mongoose = require("mongoose");
const { Schema } = mongoose;

const mySchema = new Schema({
  name: String,
});

const model = mongoose.model("User", mySchema);

module.exports = model;
