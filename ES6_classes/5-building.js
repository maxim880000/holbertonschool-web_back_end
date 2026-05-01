// Classe Building - Classe abstraite pour les bâtiments
export default class Building {
  // Constructeur avec la superficie
  constructor(sqft) {
    // Vérifier que la classe instanciée n'est pas Building directement
    if (new.target !== Building && !this.constructor.prototype.hasOwnProperty('evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter pour sqft
  get sqft() {
    return this._sqft;
  }

  // Méthode abstraite que les classes enfant doivent implémenter
  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage() must be implemented');
  }
}
