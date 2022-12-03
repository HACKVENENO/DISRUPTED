const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require("multer");
const {body} = require ('express-validator');


const productosController = require('../controllers/productos.controller');


/*** OBTENER TODOS LOS PRODUCTOS **/




/*** OBTENER TODOS LOS PRODUCTOS **/


 // ************ MULTER ************    

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {
    console.log({ file });

    cb(null, file.fieldname + "-" + Date.now());
    cb(null, Date.now() + "" + file.originalname);
  },
});

const fileUpload = multer({storage});
 



router.get('/', productosController.list);

router.get("/details/:id", productosController.details);

router.get('/create', productosController.add);
router.post('/create', fileUpload.single("fotoProducto"), productosController.crearProducto);



router.get('/edit/:id', productosController.modificarProductos);
router.put('/edit/:id', fileUpload.single ('fotoProducto'), productosController.updateProducto);

router.delete('/delete/:id', productosController.borrarProducto);

module.exports = router;