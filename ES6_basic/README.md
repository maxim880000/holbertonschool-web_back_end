# ES6 Basics

Découverte des nouvelles fonctionnalités introduites dans **ES6 (ECMAScript 2015)**, la version moderne de JavaScript.

## Qu'est-ce qu'ES6 ?

ES6 est une mise à jour majeure de JavaScript sortie en 2015. Elle rend le code plus lisible, plus court et plus sûr. Aujourd'hui c'est le standard utilisé partout (React, Node.js, etc.).

## Concepts ES6 expliqués

### `const` et `let` — déclarer des variables

- `var` (ancien) : portée globale, source de bugs
- `const` : valeur fixe, ne peut pas être réassignée
- `let` : valeur modifiable, limitée au bloc `{}` où elle est définie

```js
const nom = 'Alice';   // ne changera jamais
let age = 25;          // peut changer
age = 26;              // ok
```

### Portée de bloc — `const`/`let` restent dans leur `{}`

```js
if (true) {
  const x = 10; // x existe seulement ici
}
// x n'existe plus ici
```

### Fonctions fléchées `=>` — syntaxe courte + `this` correct

```js
// ancien
const double = function(n) { return n * 2; };

// ES6
const double = (n) => n * 2;
```

Avantage clé : une arrow function hérite du `this` du contexte parent (plus besoin de `const self = this`).

### Paramètres par défaut

```js
function saluer(nom = 'inconnu') {
  return `Bonjour ${nom}`;
}
saluer();        // "Bonjour inconnu"
saluer('Alice'); // "Bonjour Alice"
```

### Rest parameter `...args` — nombre d'arguments variable

```js
function total(...nombres) {
  return nombres.length; // tableau de tous les arguments
}
total(1, 2, 3); // 3
```

### Spread operator `...` — étaler un tableau ou une chaîne

```js
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b]; // [1, 2, 3, 4]
```

### Template literals — chaînes avec variables intégrées

```js
const ville = 'Paris';
const msg = `Bienvenue à ${ville} !`; // pas de + ni de guillemets cassés
```

### Shorthand properties — objets plus courts

```js
const nom = 'Alice';
const age = 25;
const user = { nom, age }; // au lieu de { nom: nom, age: age }
```

### Computed properties — clés dynamiques

```js
const cle = 'couleur';
const obj = { [cle]: 'rouge' }; // { couleur: 'rouge' }
```

### Méthodes ES6 dans les objets

```js
const obj = {
  saluer() { return 'Bonjour'; } // sans le mot "function"
};
```

### Boucle `for...of` — parcourir les valeurs directement

```js
for (const val of ['a', 'b', 'c']) {
  console.log(val); // 'a', 'b', 'c'
}
```

## Fichiers du projet

| Fichier | Concept |
| --- | --- |
| `0-constants.js` | `const` vs `let` |
| `1-block-scoped.js` | Portée de bloc |
| `2-arrow.js` | Fonctions fléchées |
| `3-default-parameter.js` | Paramètres par défaut |
| `4-rest-parameter.js` | Rest `...args` |
| `5-spread-operator.js` | Spread `...` |
| `6-string-interpolation.js` | Template literals |
| `7-getBudgetObject.js` | Shorthand properties |
| `8-getBudgetCurrentYear.js` | Computed properties |
| `9-getFullBudget.js` | Méthodes ES6 |
| `10-loops.js` | Boucle `for...of` |
| `11-createEmployeesObject.js` | Clés dynamiques |
| `12-createReportObject.js` | Objet avec méthode |

## Lancer un fichier

```bash
npm run dev <fichier-main>
# exemple :
npm run dev 1-main.js
```

## Stack

- Node.js 20.x
- Jest (tests)
- Babel (transpilation ES6)
- ESLint (qualité du code)
