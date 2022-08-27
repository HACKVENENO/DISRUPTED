const fs = require("fs");
const path = require('path');

const productosFilePath = path.join(__dirname, "../data/productos.json");
const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));


const productosController = {
    productos: (req, res) => {
     /**
     *  logica     
     */   
        res.render("productos", { productos : productos });
    },

    details: (req, res) =>{
    /**
     *  logica     
     */         
        const producto = productos.find((p) => p.id == req.params.id);                
        res.render("details", { producto : producto });
    }
};

module.exports = productosController;