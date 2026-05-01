// Import de la classe Currency
import Currency from './3-currency.js';

// Classe Pricing - Représente le prix d'un produit avec devise
export default class Pricing {
  // Constructeur avec montant et devise
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter et Setter pour amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // Getter et Setter pour currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // Méthode pour afficher le prix complet au format: amount currency_name (currency_code)
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Méthode statique pour convertir le prix selon le taux de change
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
