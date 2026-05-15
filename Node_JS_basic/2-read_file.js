// on importe le module fs pour lire des fichiers
const fs = require('fs');

// cette fonction lis le fichier csv de facon synchrone
function countStudents(path) {
  let data;
  try {
    // on essaie de lire le fichier si il existe pas ca throw une erreur
    data = fs.readFileSync(path, 'utf8');
  } catch (e) {
    throw new Error('Cannot load the database');
  }

  // on split par ligne et on enleve les lignes vides
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  // la premiere ligne cest le header donc on la skip
  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  // on groupe les etudiants par field
  const fields = {};
  for (const student of students) {
    const parts = student.split(',');
    const field = parts[3];
    const firstname = parts[0];
    if (!fields[field]) fields[field] = [];
    fields[field].push(firstname);
  }

  // on affiche le nombre et la liste pour chaque field
  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
