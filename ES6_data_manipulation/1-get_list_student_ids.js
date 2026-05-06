export default function getListStudentIds(students) {
	// Verifie que l'argument est bien un tableau d'objets etudiants
	if (!Array.isArray(students)) {
		return [];
	}

	// Extrait uniquement les identifiants a l'aide de map
	return students.map((student) => student.id);
}