const express = require('express');
const router = express.Router();

//controller
const usersController = require('../controllers/users.controller');

//middlewares
const usersMiddlewares = require("../middlewares/usersMiddlewares");
const noUsersMiddlewares = require("../middlewares/noUsersMiddlewares");

//register VER! el userMiddlewares sirve para que no pueda alguien que ya está en su cuenta ver el register porque ya  ingresó a una cuenta //no funciona igual pero así debería ser, con login si funciona
router.get("/register", usersMiddlewares, usersController.register);
//router.post("/register", usersController.proccessRegister);

//login 
router.get("/login", usersMiddlewares, usersController.login); //el userMiddlewares sirve para que no pueda alguien que ya está en su cuenta ver el login porque ya ingresó
router.post("/login", usersController.processLogin);

//logout
router.get("/logout", usersController.logout);

//profile
router.get("/user-profile", noUsersMiddlewares, usersController.profile);

module.exports = router;