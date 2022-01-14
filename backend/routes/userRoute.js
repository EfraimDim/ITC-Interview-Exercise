const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const {
  checkPassword,
  validateBody
} = require('../middleware/middleware');

const schemas = require('../schemas/allSchemas');

router.post(
  '/login',
  validateBody(schemas.loginSchemaAJV),
  checkPassword,
  usersController.login
);

module.exports = router;