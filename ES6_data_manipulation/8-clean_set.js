export default function cleanSet(set, startString) {
  // Retourne une chaine vide si les entrees ne sont pas valides
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  // Construit les suffixes des valeurs qui commencent par startString
  const values = [];
  for (const value of set) {
    if (typeof value !== 'string') {
      continue;
    }

    if (value.startsWith(startString)) {
      const suffix = value.slice(startString.length);
      if (suffix.length > 0) {
        values.push(suffix);
      }
    }
  }

  // Assemble les valeurs avec un separateur -
  return values.join('-');
}
