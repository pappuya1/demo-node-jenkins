const http = require('http');

// The tiny bit of "business logic" our test will check
function greet(name) {
  return `Hello, ${name}!`;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(greet('World'));
});

// Only listen when run directly (so tests can import without starting a server)
if (require.main === module) {
  server.listen(3000, () => console.log('Listening on http://localhost:3000'));
}

module.exports = { greet, server };
