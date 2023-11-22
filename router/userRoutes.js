/**
 * @file router userRoutes.js
 * @author Rizky Adji Pangestu
 */

const router = require('express').Router();
const authorize = require('../utils/authorize');
const userController = require('../app/controllers/api/userController');
const authController = require('../app/controllers/auth/authController');

// REST API ROUTES
/**
 * @swagger
 * tags:
 *   name: User APIs
 *   description: APIs to handle user resources.
 */

// Public routes:
/**
 * @swagger
 * /api/user/regist:
 *   post:
 *     summary: member user registration
 *     tags: [User APIs]
 *     description: Endpoint untuk registrasi member user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               fullname:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *               - fullname
 *     responses:
 *      '200':
 *         description: Account Successfully Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *                 data:
 *                   type: object
 *                   description: User data.
 *               example:
 *                 code: 200
 *                 message: Account Successfully Created
 *      '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 500
 *                 message: Internal Server Error
 *      '400':
 *         description: Bad Request / Email already used
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 400
 *                 message: Bad Request / Email already used
 */
router.post('/regist', authController.regist);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: All user login
 *     tags: [User APIs]
 *     description: Endpoint untuk login user Super Admin, Admin, dan Member
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *      '200':
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *                 data:
 *                   type: string
 *                   description: User token.
 *               example:
 *                 code: 200
 *                 message: Login successfully
 *                 data: "User Token Hash"
 *      '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 500
 *                 message: Internal Server Error
 *      '400':
 *         description: Email or password is incorrect
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 400
 *                 message: Email or password is incorrect
 */
router.post('/login', authController.login);

// Authorized routes:
/**
 * @swagger
 * /api/user/logout:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get current user
 *     tags: [User APIs]
 *     description: Endpoint untuk mengambil data user yang sedang login
 *     responses:
 *       '200':
 *          description: Logout Success
 *          content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 200
 *                 message: Logout Success
 *       '500':
 *          description: Internal Server Error
 *          content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 500
 *                 message: Internal Server Error
 *       '401':
 *          description: Invalid Token
 *          content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 401
 *                 message: Invalid Token
 */
router.get('/logout', authorize.all, authController.logout);

/**
 * @swagger
 * /api/user/current:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get current user
 *     tags: [User APIs]
 *     description: Endpoint untuk mengambil data user yang sedang login
 *     responses:
 *       '200':
 *          description: Logout Success
 *          content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 200
 *                 message: Logout Success
 *       '500':
 *          description: Internal Server Error
 *          content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 500
 *                 message: Internal Server Error
 *       '401':
 *          description: Invalid Token
 *          content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 401
 *                 message: Invalid Token
 */
router.get('/current', userController.getUser);

/**
 * @swagger
 * /api/user/addAdmin:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add new admin
 *     tags: [User APIs]
 *     description: Endpoint untuk menambahkan admin baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               fullname:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *               - fullname
 *     responses:
 *      '200':
 *         description: Account Successfully Created
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *                 data:
 *                   type: string
 *                   description: User Data.
 *               example:
 *                 code: 200
 *                 message: Account Successfully Created
 *      '500':
 *         description: Internal Server Error
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 500
 *                 message: Internal Server Error
 *      '400':
 *         description: Bad Request / Email already used
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: Status code.
 *                 message:
 *                   type: string
 *                   description: Status message.
 *               example:
 *                 code: 400
 *                 message: Bad Request / Email already used
 */
router.post('/addAdmin', authorize.superAdmin, authController.registAdmin);

module.exports = router;
