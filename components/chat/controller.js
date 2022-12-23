const store = require("./store");

function addChat(users) {
  return new Promise((resolve, reject) => {
    if (!users || !Array.isArray(users)) {
      console.log(
        "[datos incompletos - error en controller - addChat]"
      );
      reject("Datos inválidos");
      return false;
    }
    const chat = {
      users: users,
    };
    const rta = store.add(chat);
    resolve(rta);
  });
}

function listChats(filter) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filter));
  });
}

// function updateMessage(id, text) {
//   return new Promise(async (resolve, reject) => {
//     if (!id || !text) {
//       reject("Datos inválidos");
//       return false;
//     }
//     const newMessage = await store.updateMessage(id, text);
//     resolve(newMessage);
//   });
// }

// function deleteMessage(id) {
//   return new Promise((resolve, reject) => {
//     if (!id) {
//       reject("Parámetros inválidos");
//       return false;
//     }
//     store
//       .remove(id)
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

module.exports = {
  addChat,
  listChats,
  // updateMessage,
  // deleteMessage,
};
