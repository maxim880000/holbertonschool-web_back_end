// Classe Airport - Représente un aéroport
export default class Airport {
  // Constructeur avec nom et code de l'aéroport
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter pour name
  get name() {
    return this._name;
  }

  // Getter pour code
  get code() {
    return this._code;
  }

  // Redéfinir la méthode toString pour retourner le code de l'aéroport
  toString() {
    return `[object ${this._code}]`;
  }

  // Modifier l'affichage avec Symbol.toStringTag pour la console
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
