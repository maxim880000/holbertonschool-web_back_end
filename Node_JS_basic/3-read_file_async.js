// pareil que 2-read_file mais en asynchrone avec une promise
const fs = require('fs');

function countStudents(path) {
  // on retourne une promise pour pas bloquer le thread
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      // si le fichier existe pas on rejette la promise
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // meme logique que avant on enleve les lignes vides et le header
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      console.log(`Number of students: ${students.length}`);

      // on trie par field
      const fields = {};
      for (const student of students) {
        const parts = student.split(',');
        const field = parts[3];
        const firstname = parts[0];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      // tout sest bien passe on resolve
      resolve();
    });
  });
}

module.exports = countStudents;
