// Test pour la classe Pricing
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

// Créer une devise Euro
const euro = new Currency('EUR', 'Euro');

// Créer un prix (100 EUR)
const p = new Pricing(100, euro);
console.log(p);
console.log(p.displayFullPrice());

// Tester la méthode statique convertPrice
console.log(Pricing.convertPrice(100, 1.2)); // 120
