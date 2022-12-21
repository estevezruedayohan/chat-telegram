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

async function getMessages() {
  const listMessages = await model.find();
  return listMessages;
}

module.exports = {
  add: addMessage,
  list: getMessages,
};
