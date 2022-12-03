const express = require('express');
const router = express.Router();
const apiUserController = require('../../controllers/apiUsers/usersApiController');

router.get('/users', apiUserController.usuarios);
router.get('/users/:id', apiUserController.detalle);

module.exports = router;