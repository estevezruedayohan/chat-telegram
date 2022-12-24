const bd = require("mongoose");
bd.Promise = global.Promise;
bd.set("strictQuery", false);

function conexion(accion) {
  const { config } = require("./config/config");
  const URI_CONNECT = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}`;

  async function Connect(URI) {
    await bd.connect(URI);
    console.log("[db] Conectada con éxito en conexion.js");
  }

  async function Disconect() {
    await bd.disconnect();
    console.log("[db] Conexión cerrada en conexion.js");
  }

  const action_function = {
    openConnect: Connect(URI_CONNECT),
    closeConnect: Disconect,
  };
  return action_function[`${accion}`];
}

module.exports = conexion;
