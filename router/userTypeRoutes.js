/**
 * @file router userTypeRoutes.js
 * @author Rizky Adji Pangestu
 */

const router = require('express').Router();
const userTypeController = require('../app/controllers/api/userTypeController');

// REST API ROUTES

/**
 * @swagger
 * tags:
 *   name: UserType APIs
 *   description: APIs to handle UserType resources.
 */

/**
 * @swagger
 * /api/usertype/getAll:
 *   get:
 *     summary: get All usertype data
 *     tags: [UserType APIs]
 *     description: Retrieve usertype data from database
 *     responses:
 *       '200':
 *         description: Get All data from UserTypes
 */
router.get("/getAll", userTypeController.getALl);

/**
 * @swagger
 * "/api/usertype/getById/{id}":
 *   get:
 *     summary: get usertype data by id 
 *     tags: [UserType APIs]
 *     description: Retrieve usertype data by id from database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the usertype to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Get data by from UserTypes
 */
router.get("/getById/:id", userTypeController.getByID);

module.exports = router;