const bd = require("mongoose");

bd.Promise = global.Promise;
bd.set("strictQuery", false);

async function Connection(uri) {
  await bd.connect(uri);
  console.log("[db] Conectada con éxito");
}

module.exports = Connection;
