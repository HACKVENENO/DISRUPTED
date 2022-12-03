const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/apiProducts/productsApiController');

router.get('/products', apiProductController.list);

module.exports = router;