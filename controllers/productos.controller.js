const path = require('path');
const productos = require("../data/productos.json")

const productosController = {
    productos: (req, res) => {
     /**
     *  logica     
     */   
        res.render("productos", { productos : productos });
    },
};

module.exports = productosController;