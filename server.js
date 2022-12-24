const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socket = require("./socket");

const conexion = require("./conexion");
const bodyParser = require("body-parser");
const router = require("./network/routes");

conexion("openConnect");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);

socket.connect(server);

router(app);
app.get("/", (req, res) => {
  res.send("<h1> Hello, this is the server </>");
});
app.use("/app", express.static("public"));

server.listen(3000, () => {
  console.log("Listen on port 3000 on server");
});
