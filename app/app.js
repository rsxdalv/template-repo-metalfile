const http = require('http');

const port = process.env.PORT || 3003;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world from template-app\n');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`template-app listening on port ${port}`);
});
