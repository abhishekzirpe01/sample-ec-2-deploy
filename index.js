const http = require('http');
const server = http.createServer((req, res) => {
res.end('hello world from EC2!');
});
server.listen(3000, ()=> console.log('Server running on port 3000'));
