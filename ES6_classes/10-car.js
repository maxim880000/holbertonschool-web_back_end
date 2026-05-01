// Classe Car - Représente une voiture avec la capacité de se cloner
export default class Car {
  // Constructeur avec marque, moteur et couleur
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter pour brand
  get brand() {
    return this._brand;
  }

  // Getter pour motor
  get motor() {
    return this._motor;
  }

  // Getter pour color
  get color() {
    return this._color;
  }

  // Méthode pour cloner la voiture avec Symbol pour maintenir le type
  cloneCar() {
    // Utiliser Symbol pour créer une nouvelle instance du même type
    const CarClass = this.constructor;
    return new CarClass();
  }
}
