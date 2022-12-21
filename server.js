const express = require("express");
const bodyParser = require("body-parser");
const router = require("./network/routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);

router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("Listen on port 3000");
