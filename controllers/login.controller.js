const path = require('path');

const loginController = {    
    login: (req, res) =>  {
    /**
     *  logica
     */     
        res.render("login")
    },
};

module.exports = loginController;