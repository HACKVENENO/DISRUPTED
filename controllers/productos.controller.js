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
    
        const producto = productos.find((p) => p.id == req.params.id);                
        res.render("details", { producto : producto });
    },

    create: (req, res) => {
        res.render("product-create-form");
        
    },
	
	// Create -  Method to store
    store: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    
        console.log(req.file);
    
        const productoNuevo = {
          id: Date.now(),
          image: "default-image.png",
          name: req.body.name,
          price: req.body.price,
          bought: req.body.bought,
          color: req.body.color,
          description: req.body.description,
          size: req.body.description,
          category: req.body.category
          
        };
    
        /**
         * si hay file guardan el nombre de la imagen
         */
    
        products.push(productoNuevo);
    
        const data = JSON.stringify(products, null, " ");
        fs.writeFileSync(productsFilePath, data);
        res.redirect("/productos");
      },

	// Update - Form to edit
	edit: (req, res) => {
            const products = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
            const producto = products.find((p) => p.id == req.params.id);
            let idProducto = req.params.idProducto
            let productoToEdit = producto[idProducto]
            res.redirect("product-edit-form", { productoToEdit: producto });  
        },
        
	
	// Update - Method to update
	update: (req, res) => {

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
        const products = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
        const producto = products.filter((p) => p.id != req.params.id);
        res.redirect('/productos')
		// Do the magic
	}

};

module.exports = productosController;