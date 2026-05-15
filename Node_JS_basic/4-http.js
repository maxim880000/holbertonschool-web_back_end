// on utilise le module http natif de node pour creer un serveur
const http = require('http');

// le serveur repond hello pour nimporte quel endpoint
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

// on ecoute sur le port 1245
app.listen(1245);

module.exports = app;
