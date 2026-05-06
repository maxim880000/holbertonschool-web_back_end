export default function updateUniqueItems(map) {
  // Verifie que l'argument est une Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Cree une nouvelle map sans modifier l'originale
  const updatedMap = new Map();
  for (const [key, value] of map.entries()) {
    const nextValue = value === 1 ? 100 : value;
    updatedMap.set(key, nextValue);
  }

  return updatedMap;
}
