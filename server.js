const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send(
    "Hola, este es el servidor NODEJS del proyecto CHAT-TELEGRAM"
  );
});

app.listen(3000);
console.log("Listen on port 3000");
