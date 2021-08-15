const http = require("http");
var url = require("url");
const hostname = '127.0.0.1';
const port = 8081;
var a=0;
setInterval(generaVal,5000);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generaVal(){
    a = getRandomInt(10)+1;
}





const server = http.createServer((req, res) => {
    if(req.url === "/test"){
        res.write(a.toString());
    }
    /*
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  */
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/test`);
});

