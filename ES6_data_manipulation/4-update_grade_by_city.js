export default function updateStudentGradeByCity(students, city, newGrades) {
  // Valide la liste d'etudiants pour retourner un tableau coherent
  if (!Array.isArray(students)) {
    return [];
  }

  // Normalise la liste des notes pour eviter les acces invalides
  const grades = Array.isArray(newGrades) ? newGrades : [];

  // Filtre par ville puis ajoute la note associee ou "N/A"
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Recherche la note correspondante dans newGrades
      const gradeEntry = grades.find((grade) => grade.studentId === student.id);
      // Valeur finale de la note si elle existe, sinon "N/A"
      const gradeValue = gradeEntry ? gradeEntry.grade : 'N/A';

      return { ...student, grade: gradeValue };
    });
}
