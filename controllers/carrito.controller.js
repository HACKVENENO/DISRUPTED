const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productos.json');

const carritoController = {
    productosCarrito: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const comprados = [];
        for(const p of productos){
            if (productos.bought == "True"){
                comprados.push(p)
            }
        }    
        res.render("carrito", { comprados : comprados });
    },
};

module.exports = carritoController;
