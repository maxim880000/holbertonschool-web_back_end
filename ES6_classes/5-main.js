// Test pour la classe Building
import Building from './5-building.js';

// Créer un bâtiment
const b = new Building(100);
console.log(b);

// Essayer de créer une classe qui étend Building sans implémenter evacuationWarningMessage
class TestBuilding extends Building {}

try {
  new TestBuilding(200);
} catch (err) {
  console.log(err);
}
