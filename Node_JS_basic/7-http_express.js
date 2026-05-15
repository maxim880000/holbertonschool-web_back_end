// version express du serveur complexe avec la route /students
const express = require('express');
const fs = require('fs');

// le nom du fichier csv vient des arguments de la ligne de commande
const database = process.argv[2];

// fonction qui lis le csv et construit la reponse
function readStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // on enleve les lignes vides et le header csv
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const output = [`Number of students: ${students.length}`];

      // on regroupe les prenoms par domaine detude
      const fields = {};
      for (const student of students) {
        const parts = student.split(',');
        const field = parts[3];
        const firstname = parts[0];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }

      for (const [field, names] of Object.entries(fields)) {
        output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(output.join('\n'));
    });
  });
}

const app = express();

// page daccueil
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// route qui affiche la liste des etudiants depuis le csv
app.get('/students', (req, res) => {
  readStudents(database)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
