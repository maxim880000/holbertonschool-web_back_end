import fs from 'fs';

// lis le csv de facon async et retourne un objet avec les prenoms groupes par field
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      // on enleve les lignes vides et on skip le header
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const fields = {};
      for (const student of students) {
        const parts = student.split(',');
        const field = parts[3];
        const firstname = parts[0];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }

      resolve(fields);
    });
  });
}
