const store = require("./store");

function addMessage(chat, user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message || !chat) {
      console.log(
        "[datos incompletos - error en controler-addMessage]"
      );
      reject("Datos inválidos");
      return false;
    }
    fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
    };
    store.add(fullMessage);
    resolve(fullMessage);
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

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Parámetros inválidos");
      return false;
    }
    store
      .remove(id)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = {
  addMessage,
  listMessages,
  updateMessage,
  deleteMessage,
};
