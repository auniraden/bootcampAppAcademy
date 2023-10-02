

// const sayMessage = require('../messages/say-message.js');

// function sayHelloTo(name) {
//   sayMessage(); // Call the imported sayMessage function
//   console.log(`Hello, ${name}!`);
// }

// sayHelloTo('Woody'); // Call the sayHelloTo function with a name

// module.exports = sayHelloTo; // Export the function if needed elsewhere

function sayHelloTo(name) {
  console.log(`Hello, ${name}!`);
}

module.exports = sayHelloTo;
