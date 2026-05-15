import { readDatabase } from '../utils';

// controlleur pour les routes /students et /students/:major
export default class StudentsController {
  static getAllStudents(req, res) {
    // le fichier db est passe en argument du process
    const dbFile = process.argv[2];

    readDatabase(dbFile)
      .then((fields) => {
        // on trie les fields par ordre alphabetique insensible a la casse
        const sorted = Object.keys(fields).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        const lines = ['This is the list of our students'];
        for (const field of sorted) {
          lines.push(
            `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
          );
        }

        res.status(200).send(lines.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    // seulement CS ou SWE acceptes
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const dbFile = process.argv[2];

    readDatabase(dbFile)
      .then((fields) => {
        const students = fields[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}
