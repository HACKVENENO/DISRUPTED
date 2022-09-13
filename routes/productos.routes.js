const express = require('express');
const productosController = require('../controllers/productos.controller');
const router = express.Router();



/*** OBTENER TODOS LOS PRODUCTOS **/




/*** OBTENER TODOS LOS PRODUCTOS **/


 // ************ MULTER ************
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {
    console.log({ file });

    // cb(null, file.fieldname + "-" + Date.now());
    cb(null, Date.now() + "" + file.originalname);
  },
});

const fileUpload = multer({storage});
 



router.get('/', productosController.productos);

router.get("/details/:id", productosController.details);

router.get('/create', productosController.create);
router.post('/create', fileUpload.single("fotoProducto"), productosController.store);



router.get('/edit/:id', productosController.edit);
router.put('/edit/:id',
    fileUpload.single ('fotoProducto'),
    productosController.update);

router.delete('/delete/:id', productosController.delete);

module.exports = router;