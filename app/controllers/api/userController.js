const userService = require("../../services/userService");

/**
 * @class userController.js
 * @author Rizky Adji Pangestu
 */
class userController {
  static getUser(req, res) {
    userService.getUserByToken(req.header("Authorization").split(" ")[1])
      .then((result) => {
        if (result.status) {
          res.status(result.code).json({
            code: result.code,
            message: "Successfully get current user",
            data: result.data,
          });
        } else {
          res.status(result.code).json({
            code: result.code,
            message: result.data,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          code: 500,
          message: "Internal Server Error",
        });
      });
  }
}

module.exports = userController;