// const list = [];
const bd = require("mongoose");
const model = require("./model");
const { config } = require("./../../config/config");

bd.Promise = global.Promise;

const URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}`;

bd.set("strictQuery", false);
bd.connect(URI);
console.log("[db] Conectada con éxito");

// const options = {
//   userNewUrlParser: true,
// };

function addMessage(message) {
  const newMessage = new model(message);
  newMessage.save();
}

async function getMessages(filter) {
  let optionsFilter = {};
  if (filter != null) {
    optionsFilter = { user: filter };
  }
  const listMessages = await model.find(optionsFilter);
  return listMessages;
}

async function updateMessage(id, text) {
  const message = await model.findOne({ _id: id });
  message.message = text;
  const newMessage = await message.save();

  return newMessage;
}

function removeMessage(id) {
  return model.deleteOne({ _id: id });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateMessage: updateMessage,
  remove: removeMessage,
};
