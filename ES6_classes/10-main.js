// Test pour la classe Car et le clonage avec Symbols
import Car from './10-car.js';

// Créer une classe TestCar qui étend Car
class TestCar extends Car {}

// Créer une instance TestCar
const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 === tc2); // Doit être false (deux instances différentes)
