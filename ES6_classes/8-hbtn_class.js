// Classe HolbertonClass - Classe avec transtypage personnalisé
export default class HolbertonClass {
  // Constructeur avec taille et localisation
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter pour size
  get size() {
    return this._size;
  }

  // Getter pour location
  get location() {
    return this._location;
  }

  // Implémenter Symbol.toPrimitive pour le transtypage en nombre et chaîne
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return true;
  }
}
