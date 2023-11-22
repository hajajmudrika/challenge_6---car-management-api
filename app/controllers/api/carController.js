const carService = require('../../services/carService');

class carController {
  /**
   * @function getAll carController.js
   * @author Rizky Adji Pangestu
   */
  static getAll(req, res) {
    console.log(req.params);
    let { filter, offset, limit } = req.params;
    carService.getList(filter, offset, limit)
      .then(( { data, total, offset, limit } ) => {
        if (!total)
          res.status(404).json({ code: 404, message: "No Data" });
        else
          res.status(200).json({
            code: 200, 
            message: "OK", 
            data: { 
              cars: data
            },
            meta: {
              total: total,
              offset: offset,
              limit: limit
            }
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

  static getCarByID(req, res) {
    // Tulis kode logika controller dengan contoh seperti diatas (pakai promise)
    carService.get(req.params.id)
    .then ((result) => {
      res.status(200).json({
        code: 200,
        message: "OK",
        data: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        code : 500,
        message : "Internal Server Error"
      })
    });
  }

  static add(req, res) {
    // Tulis kode logika controller dengan contoh seperti diatas (pakai promise)
    carService.create(req.body)
    .then((result) => {
      res.status(200).json({
        code: 200,
        message: "Successfully created",
        data: result,
      });
    })
    .catch((err) => {
      res.status(422).json({
        code: 422,
        message: err.message,
      });
    });
  }

  static edit(req, res) {
    // Tulis kode logika controller dengan contoh seperti diatas (pakai promise)
    carService.update(req.body)
    .then((result) => {
      res.status(200).json({
        code: 200,
        message: "Successfully updated",
        data: result,
      });
    })
    .catch((err) => {
      res.status(422).json({
        code: 422,
        message: err.message,
      });
    });
  }

  static delete(req, res) {
    // Tulis kode logika controller dengan contoh seperti diatas (pakai promise)
    carService.delete(req.body)
    .then(() => {
      res.status(200).json({
        code: 200,
        message: "Successfully deleted",
      });
    })
    .catch((err) => {
      res.status(422).json({
        status: "FAIL",
        message: err.message,
      });
    });
  }
}

module.exports = carController;