// controlleur pour la route principale
export default class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}
