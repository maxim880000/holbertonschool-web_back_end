// Import de la classe Building
import Building from './5-building.js';

// Classe SkyHighBuilding - Représente un bâtiment très haut
export default class SkyHighBuilding extends Building {
  // Constructeur avec superficie et nombre d'étages
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter pour floors
  get floors() {
    return this._floors;
  }

  // Implémentation de la méthode abstraite evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
