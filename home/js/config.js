const http = require('http');
const fs = require('fs')
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const {url, method} = req;
  console.log('====url===', url)
  console.log('====method==', method)
  if(url === '/' && method === 'Get') {
    fs.readFile('./html/index.html', (err, data) => {
      console.log('==err===', err)
      if(err) {
        res.writeHead(520, {
          'Content-Type': 'text/plain;charset=utf-8'
        } )
        res.end('ohohoho 进入了一个爱的世界')
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    })
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});