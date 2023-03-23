const  fs = require('fs');
const  http = require('http');
const  path = require('path');


const server = http.createServer
  ((req, res) =>{
    if (req.url === '/api/users')
    {
      const users = [
        
          {name: 'farhan ellahi', age : 35, address : 'RYK Punjab Pakistan'  },
          {name: 'Nauman ellahi', age : 30, address : 'LHR Punjab Pakistan'  },
          {name: 'Shaheryar ellahi', age : 40, address : 'ISB Federal Pakistan'  }
      ]

      res.writeHead(200 , { 'Content-type' : 'Application/json'});
      res.end(JSON.stringify(users));
    }
    if (req.url === '/home')
      fs.readFile(
      path.join(__dirname , 'public' , 'index.html') , (err , content) =>
  {
    if (err) throw err;
      res.writeHead(200 , {'content-type' : 'text/html'});
      res.write(content);
  });
  
  
});


const PORT = process.env.PORT || 5000;

server.listen(PORT , ()=> {

  console.log(`Server started  successfully at port ${PORT}`);
  console.log(`Server started  successfully at port ${PORT}`);
});
