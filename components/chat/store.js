const model = require("./model");

async function addChat(chat) {
  const newChat = new model(chat);
  await newChat.save();
}

function getChats(filter) {
  return new Promise((resolve, reject) => {
    let optionsFilter = {};
    if (filter != null) {
      optionsFilter = { users: { $in: [filter] } }; // reto
    }
    model
      .find(optionsFilter)
      .populate("users")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

// async function updateMessage(id, text) {
//   const message = await model.findOne({ _id: id });
//   message.message = text;
//   const newMessage = await message.save();

//   return newMessage;
// }

// function removeMessage(id) {
//   return model.deleteOne({ _id: id });
// }

module.exports = {
  add: addChat,
  list: getChats,
  // list: getMessages,
  // updateMessage: updateMessage,
  // remove: removeMessage,
};
