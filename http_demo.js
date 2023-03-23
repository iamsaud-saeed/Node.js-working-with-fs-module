const { Console } = require('console');
const { readSync } = require('fs');
const http = require('http');
// const port = 6000;

http.createServer((req, res) =>{
  res.write('Hello world....');
  res.end();
}).listen(5000 , ()=> console.log(`Server started at port  ${5000}`))