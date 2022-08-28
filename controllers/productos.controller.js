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
    },

    create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Obtener el producto del body
        //Date.now() 
        //default-image.png
        //guardan en el json
        //redirect

	},

	// Update - Form to edit
	edit: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
        const producto = products.find((p) => p.id == req.params.id);
    
        res.redirect("product-edit-form", { productToEdit: producto });
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
        const products = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
        const producto = products.filter((p) => p.id != req.params.id);
        res.redirect('/')
		// Do the magic
	}

};

module.exports = productosController;