const express = require('express');
const recuperarContraseniaController = require('../controllers/recuperar-contrasenia.controller');
const router = express.Router();

router.get('/', recuperarContraseniaController.login);

module.exports = router;