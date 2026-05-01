// Test pour la classe HolbertonCourse
import HolbertonCourse from './2-hbtn_course.js';

// Créer un cours ES6
const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);

// Changer le nom du cours
c1.name = 'Python 101';
console.log(c1);

// Essayer d'assigner un nombre au nom (doit lever une erreur)
try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

// Essayer de créer un cours avec une longueur invalide
try {
  const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
} catch (err) {
  console.log(err);
}
