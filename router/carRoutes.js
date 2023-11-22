/**
 * @file router carRoutes.js
 * @author Rizky Adji Pangestu
 */

const router = require('express').Router();
const authorize = require('../utils/authorize');
const carController = require('../app/controllers/api/carController');

// REST API ROUTES

/**
 * @swagger
 * tags:
 *   name: Car APIs
 *   description: APIs to handle Car resources.
 */

/**
 * @swagger
 * /api/car/getAll:
 *   get:
 *     summary: get All car data or partially
 *     tags: [Car APIs]
 *     description: Retrieve car data from database
 *     responses:
 *       '200':
 *         description: Get All data or partially from Car
 *       '404':
 *         description: No Data
 *       '500':
 *         description: Internal Server Error
 */
router.get("/getAll", carController.getAll);

/**
 * @swagger
 * /api/car/getById/{id}:
 *   get:
 *     summary: get car data by id
 *     tags: [Car APIs]
 *     description: Retrieve specified car data from database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: car id
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Get All data or partially from Car
 *       '404':
 *         description: No Data
 *       '500':
 *         description: Internal Server Error
 */
router.get("/getById/:id", carController.getCarByID);

/**
 * @swagger
 * /api/car/add:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add new car
 *     tags: [Car APIs]
 *     description: Endpoint untuk menambahkan mobil baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               size_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               price:
 *                 type: integer
 *               photo:
 *                 type: string
 *               createdBy:
 *                 type: string
 *             required:
 *               - size_id
 *               - name
 *               - price
 *     responses:
 *      '200':
 *         description: Successfully created
 *      '422':
 *         description: Error message
 */
router.post("/add", authorize.admins, carController.add);

/**
 * @swagger
 * /api/car/edit:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Edit a car
 *     tags: [Car APIs]
 *     description: Endpoint untuk mengedit data mobil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               size_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               price:
 *                 type: integer
 *               photo:
 *                 type: string
 *               updatedBy:
 *                 type: string
 *             required:
 *               - id
 *               - size_id
 *               - name
 *               - price
 *               - photo
 *     responses:
 *      '200':
 *         description: Successfully updated
 *      '422':
 *         description: Error message
 */
router.put("/edit", authorize.admins, carController.edit);

/**
 * @swagger
 * /api/car/delete:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a car
 *     tags: [Car APIs]
 *     description: Endpoint untuk manghapus data mobil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               deletedBy:
 *                 type: string
 *             required:
 *               - id
 *     responses:
 *      '200':
 *         description: Successfully updated
 *      '422':
 *         description: Error message
 */
router.delete("/delete", authorize.admins, carController.delete);

module.exports = router;
