export default function createInt8TypedArray(length, position, value) {
  // Cree un buffer de la taille demandee pour stocker les octets
  const buffer = new ArrayBuffer(length);
  // Cree une vue DataView pour ecrire et lire un int8
  const view = new DataView(buffer);

  // Verifie que la position est bien dans les limites du buffer
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Ecrit la valeur int8 a la position specifiee
  view.setInt8(position, value);

  // Retourne la vue pour permettre l'inspection du buffer
  return view;
}
