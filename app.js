const http = require('http');

const port = 8000;
const hostname = '127.0.0.1';

const nodeStatic = require('node-static');

const fileServer = new nodeStatic.Server('./public');

const server = http.createServer((req, res) => {
 
    fileServer.serve(req, res);
   
})

server.listen(port, hostname, () => {
    console.log(`sever running at http://${hostname}:${port}`);
});
