const path = require('path');

const indexController = {    
    index: (req, res) =>  {
    /**
     *  logica
     */     
        res.render("index")
    },
};

module.exports = indexController;