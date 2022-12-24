const { config } = require("./config/config");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socket = require("./socket");
const cors = require("cors");

const conexion = require("./conexion");
const bodyParser = require("body-parser");
const router = require("./network/routes");

conexion("openConnect");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);

socket.connect(server);

router(app);
app.get("/", (req, res) => {
  res.send("<h1> Hello, this is the server </>");
});
app.use(`${config.publicRoute}`, express.static("public"));

server.listen(config.port, () => {
  console.log(
    `Listen on port ${config.port} on ${config.host}`
  );
});
