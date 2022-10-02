const express = require('express');
const registerController = require('../controllers/register.controller');
const router = express.Router();


//MULTER

const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/profile");
  },
  filename: function (req, file, cb) {
    console.log({ file });

    cb(null, file.fieldname + "-" + Date.now());
    cb(null, Date.now() + "" + file.originalname);
  },
});

const fileUpload = multer({storage});

router.get('/register', registerController.register);
router.post('/register', fileUpload.single("fotoPerfil"), registerController.store);

router.get('/', registerController.register);

module.exports = router