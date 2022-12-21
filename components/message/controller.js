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

function listMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = { addMessage, listMessages };
