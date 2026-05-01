// Test pour hoisting et classes StudentHolberton
import listOfStudents from './9-hoisting.js';

// Afficher la liste des étudiants
console.log(listOfStudents);

// Afficher la description complète de chaque étudiant
const listPrinted = listOfStudents.map(
  (student) => student.fullStudentDescription,
);

console.log(listPrinted);
