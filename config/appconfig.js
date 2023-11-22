/**
 * @file config appconfig.js
 * @author Rizky Adji Pangestu
 */

require("dotenv").config();

module.exports = {
  app: {
    port: process.env.DEV_APP_PORT || 8000,
    appName: process.env.APP_NAME || "car-management-api",
    env: process.env.NODE_ENV || "development",
    server: process.env.SERVER || "localhost",
    jwtSecret: process.env.SECRET_KEY || "BinarUniqueKey",
    jwtExpire: process.env.JWT_EXPIRE || "12h",
  }
};