// "export" permet d'utiliser cette fonction dans d'autres fichiers
export function taskFirst() {
  // const = valeur fixe, on ne peut pas la changer après
  const task = 'I prefer const when I can.';
  return task; // renvoie le texte
}

export function getLast() {
  return ' is okay'; // renvoie juste un bout de texte
}

export function taskNext() {
  // let = valeur qu'on peut modifier (contrairement à const)
  let combination = 'But sometimes let';
  combination += getLast(); // += ajoute du texte à la suite
  return combination;
}
