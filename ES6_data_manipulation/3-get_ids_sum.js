export default function getStudentIdsSum(students) {
  // Retourne 0 si l'entree n'est pas un tableau d'etudiants
  if (!Array.isArray(students)) {
    return 0;
  }

  // Additionne tous les identifiants avec reduce
  return students.reduce((sum, student) => sum + student.id, 0);
}
