// Classe Currency - Représente une devise monétaire
export default class Currency {
  // Constructeur avec code et nom de la devise
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter et Setter pour code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Getter et Setter pour name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Méthode pour afficher la devise complète au format: name (code)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
