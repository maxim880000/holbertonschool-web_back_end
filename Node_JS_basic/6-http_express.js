// on utilise express a la place du module http natif cest plus simple
const express = require('express');

const app = express();

// route de base qui repond hello
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
