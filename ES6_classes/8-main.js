// Test pour la classe HolbertonClass avec transtypage
import HolbertonClass from './8-hbtn_class.js';

// Créer une instance de HolbertonClass
const hc = new HolbertonClass(12, 'Mezzanine');
console.log(Number(hc)); // Devrait afficher 12 (la taille)
console.log(String(hc)); // Devrait afficher Mezzanine (la localisation)
