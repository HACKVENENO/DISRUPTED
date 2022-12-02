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
    cb(null, path.join(__dirname, "../public/img/profile"));
  },
  filename: (req, file, cb) => {
   // cb(null, file.fieldname + "-" + Date.now());
   cb(null, Date.now() + "" + file.originalname);
  },
});

const fileUpload = multer({storage});

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir tu Nombre!'),
    body('lastName').notEmpty().withMessage('Tienes que escribir tu APELLIDO!'),
    body('email').isEmail().withMessage('Tienes que ingresar un eMail válido!'),
    body('gender').notEmpty().withMessage('Tienes que seleccionar una opción'),
    body('password').notEmpty().withMessage('Debes generar un Password válido!')
  ]

router.get("/register", usersMiddlewares, usersController.register);
router.post("/register", fileUpload.single("imagenPerfil"), validations, usersController.create);//usersController.proccessRegister

router.get('/', usersController.register);


//login 
router.get("/login", usersMiddlewares, usersController.login); //el userMiddlewares sirve para que no pueda alguien que ya está en su cuenta ver el login porque ya ingresó
router.post("/login", usersController.processLogin);

//logout
router.get("/logout", usersController.logout);

//profile
router.get("/user-profile/:id", noUsersMiddlewares, usersController.profile);

router.get('/edit/:id', usersController.updateUsuario);
router.put('/edit/:id', /*fileUpload.single ('imagenPerfil'),*/ usersController.updateUsuario);

router.delete('/delete/:id', usersController.borrarUsuario);

module.exports = router;