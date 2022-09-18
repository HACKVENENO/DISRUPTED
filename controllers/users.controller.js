const path = require('path');

const usersController = {    
    login: (req, res) =>  {
    /**
     *  logica
     */     
        res.render("login")
    },
};

module.exports = usersController;