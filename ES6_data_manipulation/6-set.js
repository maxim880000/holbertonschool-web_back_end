export default function setFromArray(items) {
  // Retourne un ensemble vide si l'argument n'est pas un tableau
  if (!Array.isArray(items)) {
    return new Set();
  }

  // Cree un Set a partir du tableau pour supprimer les doublons
  return new Set(items);
}
