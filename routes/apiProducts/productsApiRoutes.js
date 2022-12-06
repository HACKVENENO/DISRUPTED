const { application } = require('express');
const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/apiProducts/productsApiController');


router.get('/products', apiProductController.productos);
router.get('/products/detalle/:id', apiProductController.detalle);
router.get('/products/categorias', apiProductController.categorias);

module.exports = router;