export default function getStudentsByLocation(students, city) {
  // Valide l'entree pour eviter les erreurs si ce n'est pas un tableau
  if (!Array.isArray(students)) {
    return [];
  }

  // Filtre les etudiants qui correspondent a la ville demandee
  return students.filter((student) => student.location === city);
}
