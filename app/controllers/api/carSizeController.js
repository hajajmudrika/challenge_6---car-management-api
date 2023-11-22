const carSizeService = require('../../services/carSizeService');

/**
 * @class carSizeController carSizeController.js
 * @author Rizky Adji Pangestu
 */
class carSizeController {
  static getAll(req, res) {
    carSizeService.getAll()
      .then((sizes) => {
        res.status(200).json({
          code: 200,
          message: "OK",
          data: sizes
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          code: 500,
          message: "Internal Server Error"
        });
      });
  }
  static getByID(req, res) {
    carSizeService.get(req.params.id)
      .then((size) => {
        res.status(200).json({
          code: 200,
          message: "OK",
          data: size
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          code: 500,
          message: "Internal Server Error"
        });
      });
  }
}

module.exports = carSizeController;