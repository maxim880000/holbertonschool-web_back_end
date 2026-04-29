// ... "étale" les éléments d'un tableau ou d'une chaîne
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
