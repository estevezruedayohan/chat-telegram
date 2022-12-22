const store = require("./store");

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.log(
        "[datos incompletos - error en controler-addMessage]"
      );
      reject("Datos inválidos");
      return false;
    }
    message = {
      user,
      message,
      date: new Date(),
    };
    store.add(message);
    resolve(message);
  });
}

function listMessages(filter) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filter));
  });
}

function updateMessage(id, text) {
  return new Promise(async (resolve, reject) => {
    if (!id || !text) {
      reject("Datos inválidos");
      return false;
    }
    const newMessage = await store.updateMessage(id, text);
    resolve(newMessage);
  });
}

module.exports = {
  addMessage,
  listMessages,
  updateMessage,
};
