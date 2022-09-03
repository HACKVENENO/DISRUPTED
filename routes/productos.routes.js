const express = require('express');
const productosController = require('../controllers/productos.controller');
const router = express.Router();

<<<<<<< HEAD
/*** OBTENER TODOS LOS PRODUCTOS **/
=======

// ************ MULTER ************
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/products");
  },
  filename: function (req, file, cb) {
    console.log({ file });

    // cb(null, file.fieldname + "-" + Date.now());
    cb(null, Date.now() + "" + file.originalname);
  },
});

const upload = multer({ storage });

>>>>>>> 1fc731d2339f31b596ab2dd875a65d1a17a19a82
router.get('/', productosController.productos);

router.get("/details/:id", productosController.details);

router.get('/create', productosController.create);
router.post('/create', upload.single("fotoProducto"), productosController.store);


router.get('/edit/:idProducto', productosController.edit);
router.put('/edit/:idProducto', productosController.update);

router.delete('/destroy', productosController.destroy);

module.exports = router;