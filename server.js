const express = require("express");
const app = express();

const conexion = require("./conexion");
const bodyParser = require("body-parser");
const router = require("./network/routes");

conexion("openConnect");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);

router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("Listen on port 3000");
