const express = require('express');
const productosController = require('../controllers/productos.controller');
const router = express.Router();

router.get('/', productosController.productos);

module.exports = router;