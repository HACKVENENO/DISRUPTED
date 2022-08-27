const express = require('express');
const productosController = require('../controllers/productos.controller');
const router = express.Router();

router.get('/', productosController.productos);
//router.get("/details", productosController.details);
router.get("/details/:id", productosController.details);

module.exports = router;