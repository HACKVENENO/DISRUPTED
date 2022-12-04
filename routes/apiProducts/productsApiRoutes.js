const { application } = require('express');
const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/apiProducts/productsApiController');


router.get('/products', apiProductController.productos);
router.get('/products/:id', apiProductController.detalle);

module.exports = router;