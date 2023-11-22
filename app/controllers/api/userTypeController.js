const userTypeService = require('../../services/userTypeService');

/**
 * @class userTypeController userTypeController.js
 * @author Rizky Adji Pangestu
 */
class userTypeController {
  static getALl(req, res) {
    userTypeService.getAll()
      .then((types) => {
        res.status(200).json({
          code: 200,
          message: "OK",
          data: types
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
    userTypeService.get(req.params.id)
      .then((type) => {
        res.status(200).json({
          code: 200,
          message: "OK",
          data: type
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

module.exports = userTypeController;