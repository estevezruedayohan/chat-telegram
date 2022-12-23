const mongoose = require("mongoose");
const { Schema } = mongoose;

const mySchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const model = mongoose.model("Chat", mySchema);

module.exports = model;
