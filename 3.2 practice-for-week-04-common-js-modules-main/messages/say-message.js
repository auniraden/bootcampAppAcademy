// Export helloMessage from messages/hello-message.js and import it into messages/say-message.js. If you run the messages/say-message.js file

const helloMessage = require('./hello-message.js');

function sayMessage() {
  console.log(helloMessage);
}

module.exports = sayMessage;
