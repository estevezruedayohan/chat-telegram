const model = require("./model");
const Connection = require("../../conexion");
const { config } = require("../../config/config");

const URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}`;

Connection(URI);

function addUser(name) {
  const newUser = new model(name);
  newUser.save();
}

async function getUsers(filter) {
  let optionsFilter = {};
  if (filter != null) {
    optionsFilter = { name: filter };
  }
  const listUsers = await model.find(optionsFilter);
  return listUsers;
}

async function updateUser(id, text) {
  const user = await model.findOne({ _id: id });
  user.name = text;
  const newUser = await user.save();

  return newUser;
}

function removeUser(id) {
  return model.deleteOne({ _id: id });
}

module.exports = {
  add: addUser,
  listUsers: getUsers,
  update: updateUser,
  remove: removeUser,
};
