const userRepository = require("../repositories/userRepository");
const randomize = require("../../utils/randomize");
const config = require("../../config/appconfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @class userService.js
 * @author Rizky Adji Pangestu
 */
class userService {
  static async register(userType, email, password, fullname, creator = null) {
    try {
      if (!userType || !email || !password || !fullname) {
        return {
          status: false,
          code: 400,
          data: "Bad Request",
        };
      } else {
        if (await userRepository.checkEmail(email)) {
          return {
            status: false,
            code: 400,
            data: "Email already used",
          };
        } else {
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(password, salt);
          const user = {
            id: randomize.randomID(),
            usertype_id: userType,
            fullname: fullname,
            email: email,
            password: hash,
            status: true,
            createdBy: creator ?? "system",
            updatedBy: creator ?? "system",
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          const result = await userRepository.create(user);
          return {
            status: true,
            code: 200,
            data: result,
          };
        }
      }
    } catch (error) {
      throw error;
    }
  }
  static async authenticate(email, password) {
    try {
      const user = await userRepository.checkEmail(email);
      if (!user) {
        return {
          status: false,
          code: 400,
          data: "Email or password is incorrect",
        };
      } else {
        const checkPassword = await bcrypt.compare(password, user.password);
        if (checkPassword) {
          let payload = {
            id: user.id,
            fullname: user.fullname,
            email: user.email,
            role_id: user.usertype_id,
          };
          const token = jwt.sign(payload, config.app.jwtSecret, {
            expiresIn: config.app.jwtExpire
          });
          return {
            status: true,
            code: 200,
            data: token
          };
        } else {
          return {
            status: false,
            code: 400,
            data: "Email or password is incorrect",
          };
        }
      }
    } catch (error) {
      throw error;
    }
  }
  static async getUserByToken(token) {
    try {
      const decoded = jwt.decode(token);
      if (decoded) {
        const user = await userRepository.find(decoded.id);
        if (!user) {
          return {
            status: false,
            code: 404,
            data: "Account not found",
          };
        } else {
          return {
            status: true,
            code: 200,
            data: user,
          };
        }
      } else {
        return {
          status: false,
          code: 401,
          data: "Invalid token",
        };
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = userService;