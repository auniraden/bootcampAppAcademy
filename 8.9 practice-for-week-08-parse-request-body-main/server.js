const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});
const port = 5000;
server.listen(port,() => {
    console.log("Successfully started the server on port ${`port`}.");
});
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
