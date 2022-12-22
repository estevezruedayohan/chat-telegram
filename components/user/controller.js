const store = require("./store");

function addUser(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      console.log(
        "[datos incompletos - error en controler-addUser]"
      );
      reject("Datos de usuario inválidos");
      return false;
    }
    user = {
      name,
    };
    store.add(user);
    resolve(user);
  });
}

function listUsers(filter) {
  return new Promise((resolve, reject) => {
    resolve(store.listUsers(filter));
  });
}

function updateUser(id, text) {
  return new Promise(async (resolve, reject) => {
    if (!id || !text) {
      reject("Datos inválidos");
      return false;
    }
    const newUser = await store.update(id, text);
    resolve(newUser);
  });
}

function deleteUser(id) {
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
  addUser,
  listUsers,
  updateUser,
  deleteUser,
};
