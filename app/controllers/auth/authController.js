const userService = require("../../services/userService");

/**
 * @class authController.js
 * @author Rizky Adji Pangestu
 */
class authController {
  // Member regist
  static regist(req, res) {
    userService
      .register(3, req.body.email, req.body.password, req.body.fullname, req.body.email)
        .then((result) => {
          if (result.status) {
            res.status(result.code).json({
              code: result.code,
              message: "Account successfully created",
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
            message: "Internal server error",
          });
        });
  }
  // Admin regist
  static registAdmin(req, res) {
    userService
      .register(2, req.body.email, req.body.password, req.body.fullname, req.body.email)
        .then((result) => {
          if (result.status) {
            res.status(result.code).json({
              code: result.code,
              message: "Account successfully created",
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
            message: "Internal server error",
          });
        });
  }
  // Users login
  static login(req, res) {
    console.log(req.body);
    userService.authenticate(req.body.email, req.body.password)
      .then((result) => {
        if (result.status) {
          res.status(result.code).json({
            code: result.code,
            message: "Login successfully",
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
  // Users logout
  static logout(req, res) {
    userService.getUserByToken(req.header("Authorization").split(" ")[1])
      .then((result) => {
        if (result.status) {
          res.status(result.code).json({
            code: result.code,
            message: "Logout Success",
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

module.exports = authController;