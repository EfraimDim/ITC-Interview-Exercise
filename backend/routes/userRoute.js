const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const {
  checkPassword
} = require('../middleware/middleware');

router.post(
    '/login',
    checkPassword,
    usersController.login
)

module.exports = router;