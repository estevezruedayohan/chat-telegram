const express = require("express");
const response = require("../../network/response");
const controller = require("./controller.js");

const router = express.Router();

router.get("/", (req, res) => {
  const filter = req.query.user || null;
  controller
    .listMessages(filter)
    .then((list) => {
      response.success(req, res, 201, list);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        500,
        error,
        "Error inesperado"
      );
    });
});

router.patch("/:id", (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((newMessage) => {
      response.success(req, res, 200, newMessage);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        500,
        error,
        "Error inesperado"
      );
    });
});

router.post("/", (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, 201, fullMessage);
    })
    .catch((message) => {
      response.error(
        req,
        res,
        400,
        message,
        "Error en los datos de entrada"
      );
    });
});

module.exports = router;
