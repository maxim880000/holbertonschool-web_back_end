function displayMessage(message) {
	// Affiche le message reçu en paramètre dans le terminal (STDOUT)
  console.log(message);
}
// Rend la fonction accessible depuis d'autres fichiers avec require()
module.exports = displayMessage;