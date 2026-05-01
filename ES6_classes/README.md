# ES6 Classes - Projet Holberton School

## 📚 Description

Ce projet explore les **classes ES6** et la **métaprogrammation** en JavaScript. Il couvre tous les aspects essentiels des classes modernes, y compris l'héritage, les getters/setters, les méthodes statiques, et l'utilisation de Symbols pour la métaprogrammation.

## 🎯 Objectifs d'apprentissage

À la fin de ce projet, vous serez capable de :

- ✅ Définir une classe ES6
- ✅ Ajouter des méthodes à une classe
- ✅ Comprendre et implémenter les méthodes statiques
- ✅ Étendre une classe à partir d'une autre (héritage)
- ✅ Utiliser la métaprogrammation et les Symbols
- ✅ Implémenter les getters et les setters
- ✅ Valider les types dans les constructeurs et setters

## 🛠️ Configuration requise

- **Node.js** : v20.x.x ou supérieur
- **npm** : v9.x.x ou supérieur
- **OS** : Ubuntu 20.04 LTS ou compatible

### Installation du système

```bash
# Installation de Node.js 20.x
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

# Vérifier les versions
node -v    # v20.x.x
npm -v     # 9.x.x
```

## 📦 Installation

1. Cloner le repository Holberton School
2. Naviguer dans le dossier du projet
3. Installer les dépendances

```bash
cd /root/holbertonschool-web_back_end/ES6_classes
npm install
```

### Dépendances du projet

- **jest** : Framework de test
- **babel-jest** : Babel pour Jest
- **@babel/core** : Babel compiler
- **@babel/preset-env** : Presets Babel pour ES6+
- **eslint** : Linter JavaScript

## 📋 Structure du projet

```
ES6_classes/
├── 0-classroom.js           # Classe simple ClassRoom
├── 0-main.js               # Test pour ClassRoom
├── 1-make_classrooms.js    # Fonction d'initialisation
├── 1-main.js               # Test pour initializeRooms
├── 2-hbtn_course.js        # Classe avec getters/setters
├── 2-main.js               # Test pour HolbertonCourse
├── 3-currency.js           # Classe Currency
├── 3-main.js               # Test pour Currency
├── 4-pricing.js            # Classe Pricing avec méthode statique
├── 4-main.js               # Test pour Pricing
├── 5-building.js           # Classe abstraite Building
├── 5-main.js               # Test pour Building
├── 6-sky_high.js           # Classe héritée de Building
├── 6-main.js               # Test pour SkyHighBuilding
├── 7-airport.js            # Classe Airport avec Symbol
├── 7-main.js               # Test pour Airport
├── 8-hbtn_class.js         # Classe avec Symbol.toPrimitive
├── 8-main.js               # Test pour HolbertonClass
├── 9-hoisting.js           # Classes avec hoisting
├── 9-main.js               # Test pour hoisting
├── 10-car.js               # Classe Car avec clonage
├── 10-main.js              # Test pour Car
├── package.json            # Configuration npm
├── babel.config.js         # Configuration Babel
├── .eslintrc.js            # Configuration ESLint
└── README.md               # Ce fichier
```

## 🚀 Utilisation

### Exécuter un fichier avec Babel

```bash
npm run dev 0-main.js
npm run dev 1-main.js
# etc...
```

### Exécuter les tests Jest

```bash
npm test
```

### Vérifier le linting ESLint

```bash
npm run lint
```

### Exécuter tous les tests et lint

```bash
npm run full-test
```

## 📚 Détail des tâches

### 0️⃣ Tâche 0 : Classe ClassRoom
**Fichier** : `0-classroom.js`

Implémente une classe simple avec un attribut privé.

```javascript
import ClassRoom from "./0-classroom.js";
const room = new ClassRoom(10);
console.log(room._maxStudentsSize); // 10
```

**Concepts** : Constructeur, attributs privés

---

### 1️⃣ Tâche 1 : Initialiser les salles de classe
**Fichier** : `1-make_classrooms.js`

Fonction qui retourne un tableau de 3 instances ClassRoom.

```javascript
import initializeRooms from './1-make_classrooms.js';
console.log(initializeRooms());
// [ClassRoom { _maxStudentsSize: 19 }, ...]
```

**Concepts** : Factory pattern, Import/Export

---

### 2️⃣ Tâche 2 : Classe HolbertonCourse avec Getters/Setters
**Fichier** : `2-hbtn_course.js`

Classe avec validation de types pour name (String), length (Number), students (Array).

```javascript
const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name); // "ES6"
c1.name = "Python 101"; // Fonctionne
c1.name = 12; // Lève TypeError
```

**Concepts** : Getters, Setters, Validation, Type checking

---

### 3️⃣ Tâche 3 : Classe Currency
**Fichier** : `3-currency.js`

Classe représentant une devise avec méthode `displayFullCurrency()`.

```javascript
const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency()); // "Dollars ($)"
```

**Concepts** : Getters, Setters, Méthodes

---

### 4️⃣ Tâche 4 : Classe Pricing avec méthode statique
**Fichier** : `4-pricing.js`

Classe pour gérer les prix avec devise. Inclut une **méthode statique** `convertPrice()`.

```javascript
const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p.displayFullPrice()); // "100 Euro (EUR)"
console.log(Pricing.convertPrice(100, 1.2)); // 120
```

**Concepts** : Composition, Méthodes statiques

---

### 5️⃣ Tâche 5 : Classe abstraite Building
**Fichier** : `5-building.js`

Classe abstraite qui force les classes enfants à implémenter `evacuationWarningMessage()`.

```javascript
class TestBuilding extends Building {}
new TestBuilding(200); // Lève Error
```

**Concepts** : Classes abstraites, new.target, validation du constructeur

---

### 6️⃣ Tâche 6 : Héritage - SkyHighBuilding
**Fichier** : `6-sky_high.js`

Classe qui hérite de Building et implémente `evacuationWarningMessage()`.

```javascript
const building = new SkyHighBuilding(140, 60);
console.log(building.floors); // 60
console.log(building.evacuationWarningMessage()); // "Evacuate slowly the 60 floors"
```

**Concepts** : Héritage (extends), super, surcharge de méthode

---

### 7️⃣ Tâche 7 : Airport avec Symbol.toStringTag
**Fichier** : `7-airport.js`

Classe utilisant **Symbol.toStringTag** pour personnaliser l'affichage.

```javascript
const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF); // Airport [SFO] { ... }
console.log(airportSF.toString()); // "[object SFO]"
```

**Concepts** : Symbols, toString(), métaprogrammation

---

### 8️⃣ Tâche 8 : Transtypage avec Symbol.toPrimitive
**Fichier** : `8-hbtn_class.js`

Classe qui définit le comportement quand elle est convertie en nombre ou chaîne.

```javascript
const hc = new HolbertonClass(12, "Mezzanine");
console.log(Number(hc)); // 12
console.log(String(hc)); // "Mezzanine"
```

**Concepts** : Symbol.toPrimitive, transtypage

---

### 9️⃣ Tâche 9 : Hoisting
**Fichier** : `9-hoisting.js`

Fix du code avec hoisting et ordre des classes.

**Concepts** : Hoisting, ordre d'exécution, closures

---

### 🔟 Tâche 10 : Clonage avec Symbols
**Fichier** : `10-car.js`

Classe Car avec méthode `cloneCar()` utilisant `this.constructor`.

```javascript
const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();
console.log(tc2 instanceof TestCar); // true
console.log(tc1 === tc2); // false
```

**Concepts** : Métaprogrammation, Symbols, this.constructor, clonage

---

## 🧪 Tester les solutions

### Test manuel

```bash
# Tester chaque tâche
npm run dev 0-main.js
npm run dev 1-main.js
npm run dev 2-main.js
# etc...
```

### Tests automatisés

```bash
# Lancer Jest
npm test

# Avec couverture de code
npm test -- --coverage
```

### Vérifier le style de code

```bash
npm run lint

# Fixer automatiquement les problèmes
npx eslint . --fix
```

## 🔑 Points clés

### Classes ES6

```javascript
export default class MyClass {
  constructor(param) {
    this._param = param;
  }

  // Getter
  get param() {
    return this._param;
  }

  // Setter
  set param(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Must be string');
    }
    this._param = value;
  }

  // Méthode statique
  static staticMethod() {
    return 'Static method result';
  }

  // Méthode instance
  instanceMethod() {
    return this._param;
  }
}
```

### Héritage

```javascript
export default class ChildClass extends ParentClass {
  constructor(param1, param2) {
    super(param1); // Appeler le constructeur parent
    this._param2 = param2;
  }

  childMethod() {
    // Peut accéder aux méthodes du parent
    super.parentMethod();
  }
}
```

### Symbols pour la métaprogrammation

```javascript
// Symbol.toPrimitive
[Symbol.toPrimitive](hint) {
  if (hint === 'number') return 42;
  if (hint === 'string') return 'value';
}

// Symbol.toStringTag
get [Symbol.toStringTag]() {
  return 'ClassName';
}

// Symbol.toString
toString() {
  return '[object Custom]';
}
```

## 📖 Ressources

- [MDN - Classes ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN - Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [MDN - Getters et Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [MDN - Méthodes statiques](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [MDN - Héritage et prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

## ✅ Checklist de validation

- ✓ Tous les fichiers ont l'extension `.js`
- ✓ Chaque fichier se termine par une nouvelle ligne
- ✓ Pas d'erreurs ESLint
- ✓ Tous les tests Jest passent
- ✓ Getters/Setters avec validation de types
- ✓ Méthodes statiques correctement implémentées
- ✓ Héritage avec `extends` et `super`
- ✓ Métaprogrammation avec Symbols
- ✓ Classes abstraites avec contrôle dans le constructeur
- ✓ Chaque classe exporte correctement

## 🤝 Auteur

**Johann Kerbrat** - Engineering Manager at Uber Works

Projet créé pour **Holberton School** - Programme de formation aux technologies web et backend.

## 📝 Licence

Ce projet est une partie du curriculum Holberton School.

---

**Bonne chance dans l'apprentissage des classes ES6 ! 🚀**
