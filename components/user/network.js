const express = require("express");
const response = require("../../network/response");
const controller = require("./controller.js");

const router = express.Router();

router.post("/", (req, res) => {
  controller
    .addUser(req.body.name)
    .then((userData) => {
      response.success(req, res, 201, userData);
    })
    .catch((error) => {
      response.error(req, res, 500, error, "Error interno");
    });
});

router.get("/", (req, res) => {
  const filter = req.query.name || null;
  controller
    .listUsers(filter)
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
    .updateUser(req.params.id, req.body.name)
    .then((newUser) => {
      response.success(req, res, 200, newUser);
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

router.delete("/:id", (req, res) => {
  controller
    .deleteUser(req.params.id)
    .then((data) => {
      if (data.deletedCount == 0) {
        response.error(
          req,
          res,
          500,
          "Error interno",
          "Usuario no existe en la BD"
        );
        return false;
      }
      response.success(
        req,
        res,
        200,
        `Usuario con id: ${req.params.id} fue eliminado`
      );
    })
    .catch((error) => {
      response.error(req, res, 500, "Error interno", error);
    });
});

module.exports = router;
