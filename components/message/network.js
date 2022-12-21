const express = require("express");
const response = require("../../network/response");
const controller = require("./controller.js");

const router = express.Router();

router.get("/", (req, res) => {
  controller
    .listMessages()
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

router.patch("/", (req, res) => {
  if (req.query.error == "ok") {
    response.error(
      req,
      res,
      null,
      "Error simulado",
      "Detalles del error en router patch /"
    );
  } else {
    response.success(req, res, 201, "Creado Correctamente");
  }
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
