const sayHelloTo = require('./say-hello-to.js');

function giveSecretMessage(message) {
  sayHelloTo('Buzz');
  console.log(`(Psst... ${message})`);
}

module.exports = giveSecretMessage;
