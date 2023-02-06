const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// console.log("router loaded")
router.get('/',userController.profile)

module.exports = router;