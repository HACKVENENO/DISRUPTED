const express = require('express');
const productosController = require('../controllers/productos.controller');
const router = express.Router();


router.get('/', productosController.productos);
//router.get("/details", productosController.details);
router.get("/details/:id", productosController.details);

router.post('/create', productosController.create);

router.get('/store', productosController.store);

router.get('/edit/:idProducto', productosController.edit);
router.put('/edit/:idProducto', productosController.edit);

router.put('/:id', productosController.update);

router.delete('/destroy', productosController.destroy);

module.exports = router;