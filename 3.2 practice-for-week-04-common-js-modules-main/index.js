
const helloMessage = require('./messages/hello-message.js');
const sayHelloTo = require('./send-messages/say-hello-to.js');
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato.js');
const giveSecretMessage = require('./send-messages/give-secret-message.js');

console.log(helloMessage); // Greetings! Let us begin!

sayHelloTo('Woody'); // Hello Woody!

giveMessageToMrsPotato('Hi, Mrs. Potato!'); // Hello Mrs. Potato!

giveSecretMessage('Hi Buzz'); // (Psst... Hi Buzz)

giveMessageToMrsPotato('You are looking very spudly today!'); // Hello Mr. Potato!

giveMessageToMrsPotato('There\'s a good deal on mattresses tomorrow.'); // Hello Mrs. Potato!

giveSecretMessage('Do you like to do things in unnecessarily complicated ways?'); // (Psst... Do you like to do things in unnecessarily complicated ways?)


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
