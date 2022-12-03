const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/apiProducts/productsApiController');

router.get('/products', apiProductController.productos);

module.exports = router;