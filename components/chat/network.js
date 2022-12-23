const express = require("express");
const response = require("../../network/response");
const controller = require("./controller.js");

const router = express.Router();

router.post("/", (req, res) => {
  controller
    .addChat(req.body.users)
    .then((newChat) => {
      response.success(req, res, 201, newChat);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        500,
        error,
        "Error en los datos de usuarios"
      );
    });
});

router.get("/", (req, res) => {
  const filter = req.body.userId || null;
  controller
    .listChats(filter)
    .then((list) => {
      response.success(req, res, 200, list);
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

// router.patch("/:id", (req, res) => {
//   controller
//     .updateMessage(req.params.id, req.body.message)
//     .then((newMessage) => {
//       response.success(req, res, 200, newMessage);
//     })
//     .catch((error) => {
//       response.error(
//         req,
//         res,
//         500,
//         error,
//         "Error inesperado"
//       );
//     });
// });

// router.delete("/:id", (req, res) => {
//   controller
//     .deleteMessage(req.params.id)
//     .then((data) => {
//       if (data.deletedCount == 0) {
//         response.error(
//           req,
//           res,
//           500,
//           "mensaje no existe",
//           "Mensaje eliminado previamente"
//         );
//         return false;
//       }
//       response.success(
//         req,
//         res,
//         200,
//         `Mensaje con id: ${req.params.id} fue eliminado`
//       );
//     })
//     .catch((error) => {
//       response.error(req, res, 500, "Error interno", error);
//     });
// });

module.exports = router;
