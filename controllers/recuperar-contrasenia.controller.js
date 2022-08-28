const path = require('path');

const recuperarContraseniaController = {    
    login: (req, res) =>  {
    /**
     *  logica
     */     
        res.render("recuperar-contrasenia")
    },
};

module.exports = recuperarContraseniaController;