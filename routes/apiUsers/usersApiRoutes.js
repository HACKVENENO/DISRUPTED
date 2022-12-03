const express = require('express');
const router = express.Router();
const apiUserController = require('../../controllers/apiUsers/usersApiController');

router.get('/users', apiUserController.list);

module.exports = router;