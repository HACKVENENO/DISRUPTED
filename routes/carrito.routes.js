const express = require('express');
const carritoController = require('../controllers/carrito.controller');
const router = express.Router();

router.get('/', carritoController.productosCarrito);

module.exports = router;