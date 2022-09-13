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
        const products = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
    
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
         if (req.file) {
          productoNuevo.image = req.file.filename;
        }

        products.push(productoNuevo);
    
        const data = JSON.stringify(products, null, " ");
        fs.writeFileSync(productsFilePath, data);

        res.redirect("/productos");
      },

	// Update - Form to edit
	edit: (req, res) => {
            const products = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
            const producto = products.find((p) => p.id == req.params.id);

            res.render("product-edit-form", { productoToEdit: producto });  
        },
        
	
	// Update - Method to update
	update: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
        console.log(req.body);
        console.log(req.params.id);

        productos.forEach((p) => {
            if (p.id == req.params.id) {
              p.name = req.body.name;
              p.price = req.body.price;
              p.bought = req.body.bought;
              p.color = req.body.color;
              p.description = req.body.description;
              p.size = req.body.size;
              p.category = req.body.category;
      
              if (req.file) {
                fs.unlinkSync("./public/img/" + p.image);
                p.image = req.file.filename;
              }
            }
          });

          const data = JSON.stringify(productos, null, " ");
    fs.writeFileSync(productosFilePath, data);

    res.redirect("/productos/detail/" + req.params.id);
	},

	// Delete - Delete one product from DB
	delete : (req, res) => {
        const products = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
        const producto = products.filter((p) => p.id != req.params.id);
        res.redirect('/productos')
		// Do the magic
	}

};

module.exports = productosController;