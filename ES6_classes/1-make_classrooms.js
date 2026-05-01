// Import de la classe ClassRoom
import ClassRoom from './0-classroom.js';

// Fonction pour initialiser les salles de classe
// Retourne un tableau de 3 salles avec les tailles 19, 20, et 34
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
