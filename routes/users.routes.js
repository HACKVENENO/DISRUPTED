const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require("multer");
const {body} = require ('express-validator')

//controller
const usersController = require('../controllers/users.controller');

//middlewares
const usersMiddlewares = require("../middlewares/usersMiddlewares");
const noUsersMiddlewares = require("../middlewares/noUsersMiddlewares");

//register VER! el userMiddlewares sirve para que no pueda alguien que ya está en su cuenta ver el register porque ya  ingresó a una cuenta //no funciona igual pero así debería ser, con login si funciona

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img/profile");
  },
  filename: (req, file, cb) => {
   // cb(null, file.fieldname + "-" + Date.now());
   cb(null, Date.now() + "" + file.originalname);
  },
});

const fileUpload = multer({storage});

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir tu Nombre!'),
    body('lastName').notEmpty().withMessage('Tienes que escribir tu Apellido!'),
    body('email').notEmpty().withMessage('Tienes que ingresar un eMail válido!'),
    body('gender').notEmpty().withMessage('Tienes que seleccionar una opción'),
    body('password').notEmpty().withMessage('Debes generar un Password válido!')
  ]

<<<<<<< HEAD
router.get("/register", usersController.register);
router.post("/user/register", fileUpload.single("imagenPerfil"), validations, usersController.store);//usersController.processRegister
=======
router.get("/register", usersMiddlewares, usersController.register);
router.post("/user/register", fileUpload.single("imagenPerfil"), validations, usersController.store);//usersController.proccessRegister
>>>>>>> d8b542c7326481898e31017eaa8ea25d5bc63538

router.get('/', usersController.register);


//login 
router.get("/login", usersMiddlewares, usersController.login); //el userMiddlewares sirve para que no pueda alguien que ya está en su cuenta ver el login porque ya ingresó
router.post("/login", usersController.processLogin);

//logout
router.get("/logout", usersController.logout);

//profile
router.get("/user-profile", noUsersMiddlewares, usersController.profile);

module.exports = router;