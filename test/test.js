/*
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('nodetest.html', (err, html) => {
  if(err){
    throw err;
  }
  const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      res.write(html);
      res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port '+port);
  });
});
*/
var rs = require('readline-sync');

var aNewNum = 30;
var aNewNewNum = 20;

console.log(aNewNum + aNewNewNum);

var name = rs.question('What is your name?');

console.log("Your name is " + name);
