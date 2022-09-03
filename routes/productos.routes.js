const express = require('express');
const productosController = require('../controllers/productos.controller');
const router = express.Router();

/*** OBTENER TODOS LOS PRODUCTOS **/
router.get('/', productosController.productos);

router.get("/details/:id", productosController.details);

router.put('/create', productosController.create);

router.get('/store', productosController.store);

router.get('/edit/:id', productosController.edit);

router.get('/create', productosController.create);

router.get('/:id', productosController.update);

router.delete('/destroy', productosController.destroy);

module.exports = router;