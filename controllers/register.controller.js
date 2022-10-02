const path = require('path');

const registerController = {    
    register: (req, res) =>  {
    /**
     *  logica
     */     
        res.render("register")
    },
};

module.exports = registerController;

//debería pasarse todo a users.controller