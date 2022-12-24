const model = require("./model");

function addMessage(message) {
  const newMessage = new model(message);
  newMessage.save();
}

function getMessages(filter) {
  return new Promise((resolve, reject) => {
    let optionsFilter = {};
    if (filter != null) {
      optionsFilter = { user: filter };
    }
    model
      .find(optionsFilter)
      .populate("user")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

async function updateMessage(id, text) {
  const message = await model.findOne({ _id: id });
  message.message = text;
  const newMessage = await message.save();

  return newMessage;
}

function removeMessage(id) {
  return model.deleteOne({ _id: id });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateMessage: updateMessage,
  remove: removeMessage,
};
