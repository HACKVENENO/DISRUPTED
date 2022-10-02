const express = require('express');
const registerController = require('../controllers/register.controller');
const router = express.Router();

router.get('/', registerController.register);

module.exports = router

//debería pasarse todo lo relacionado al usuario a users.routes