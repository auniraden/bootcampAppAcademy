const http = require('http');

const server = http.createServer((req, res) => {
  // ...
});

//common development port numbers 3000, 5000, 8000

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));

//request object
const server = http.createServer((req, res) => {
    console.log(req);
  });

  //response object
  const server = http.createServer((req, res) => {
    console.log(res);
  });
