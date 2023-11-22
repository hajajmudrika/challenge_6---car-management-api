/**
 * @file router carSizeRoutes.js
 * @author Rizky Adji Pangestu
 */

const router = require('express').Router();
const carSizeController = require('../app/controllers/api/carSizeController');

// REST API ROUTES

/**
 * @swagger
 * tags:
 *   name: CarSize APIs
 *   description: APIs to handle CarSize resources.
 */

/**
 * @swagger
 * /api/carsize/getAll:
 *   get:
 *     summary: get All carsize data
 *     tags: [CarSize APIs]
 *     description: Retrieve carsize data from database
 *     responses:
 *       '200':
 *         description: Get All data from CarSizes
 */
router.get("/getAll", carSizeController.getAll);

/**
 * @swagger
 * "/api/carsize/getById/{id}":
 *   get:
 *     summary: get carsize data by id 
 *     tags: [CarSize APIs]
 *     description: Retrieve carsize data by id from database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the carsize to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Get data by from CarSizes
 */
router.get("/getById/:id", carSizeController.getByID);

module.exports = router;