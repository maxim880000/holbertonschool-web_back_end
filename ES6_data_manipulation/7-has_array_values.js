export default function hasValuesFromArray(set, array) {
  // Valide les types pour eviter les erreurs d'execution
  if (!(set instanceof Set) || !Array.isArray(array)) {
    return false;
  }

  // Verifie que toutes les valeurs du tableau sont presentes dans le set
  return array.every((value) => set.has(value));
}
