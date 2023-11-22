/**
 * @file utils authorize.js
 * @author Rizky Adji Pangestu
 */

const config = require("../config/appconfig");
const userEnum = require("../utils/userenum");
const jwt = require("jsonwebtoken");

function verifyToken(req, res) {
  const header = req.header("Authorization");
  if (!header) throw res.sendStatus(401); // Unauthorized
  const token = header.split(" ")[1];
  if (!token) return res.sendStatus(403); // Forbidden
  return jwt.verify(token, config.app.jwtSecret);
}

module.exports = {
  all(req, res, next) {
    verifyToken(req, res);
    next();
  },
  admins(req, res, next) {
    const payload = verifyToken(req, res);
    if (payload.role_id === userEnum.admin || payload.role_id === userEnum.superAdmin)
      next();
    else 
      res.sendStatus(403);
  },
  superAdmin(req, res, next) {
    const payload = verifyToken(req, res);
    if (payload.role_id !== userEnum.superAdmin) return res.sendStatus(403);
    else next();
  },
  admin(req, res, next) {
    const payload = verifyToken(req, res);
    if (payload.role_id !== userEnum.admin) return res.sendStatus(403);
    else next();
  },
  member(req, res, next) {
    const payload = verifyToken(req, res);
    if (payload.role_id !== userEnum.member) return res.sendStatus(403);
    else next();
  },
};