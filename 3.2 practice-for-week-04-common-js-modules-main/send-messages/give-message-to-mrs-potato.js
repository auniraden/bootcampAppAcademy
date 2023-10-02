const sayHelloTo = require('./say-hello-to.js');

function giveMessageToMrsPotato(message) {
  sayHelloTo('Mrs. Potato');
  console.log(`"${message}"`);
}

module.exports = giveMessageToMrsPotato;
