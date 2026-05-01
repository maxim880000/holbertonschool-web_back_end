// Test pour la classe SkyHighBuilding
import SkyHighBuilding from './6-sky_high.js';

// Créer un bâtiment très haut (140 sqft, 60 étages)
const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());
