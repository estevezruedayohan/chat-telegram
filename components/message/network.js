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
  const { chat, user, message } = req.body;
  controller
    .addMessage(chat, user, message)
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

router.delete("/:id", (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then((data) => {
      if (data.deletedCount == 0) {
        response.error(
          req,
          res,
          500,
          "mensaje no existe",
          "Mensaje eliminado previamente"
        );
        return false;
      }
      response.success(
        req,
        res,
        200,
        `Mensaje con id: ${req.params.id} fue eliminado`
      );
    })
    .catch((error) => {
      response.error(req, res, 500, "Error interno", error);
    });
});

module.exports = router;
