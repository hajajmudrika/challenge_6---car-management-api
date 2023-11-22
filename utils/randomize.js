/**
 * @file utils randomID.js
 * @author Rizky Adji Pangestu
 */

class randomize {
  static randomID() {
    return parseInt(Math.random().toPrecision(9).toString().substring(2));
  }
  static randomPassword() {
    return Math.random().toString(36).substr(2, 9);
  }
}

module.exports = randomize;
