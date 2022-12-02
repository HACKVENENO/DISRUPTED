const { decodeBase64 } = require("bcryptjs");
const fs = require("fs");
const path = require('path');
const db = require("../database/models");


const productosFilePath = path.join(__dirname, "../data/productos.json");
// const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));

const {validationResult}= require ('express-validator');
const Producto = require("../database/models/Producto");
const { DEFAULT_ECDH_CURVE } = require("tls");


const productosController = {
  list: async (req, res) => {
      try {
          const productos = await db.Productos.findAll();
          console.log({productos});
          res.render("productos", { productos : productos });
        } catch (error) {
            console.log({ error })
            res.redirect("/productos")
        }
    },
    details: async (req, res) => {
        try {
             const productos = await db.Productos.findByPk(req.params.id);
             res.render('details', { producto: productos });

        } catch (error) {
            res.send(error)
        }
   
    },

    
add: function(req, res){
      res.render("product-create-form")
},


crearProducto: (req, res) => {
//     try{
//         const productoNuevo = await db.Productos.create({
//               imagen: archivo,
//               name : req.body.name,
//               price : req.body.price,
//               color : req.body.color,
//               description : req.body.description,
//               size : req.body.size,
//               category : req.body.category,
//               stock : req.body.stock,
//         });
//         console.log({productoNuevo});
//         res.redirect('/products');
//     } catch (error) {
//         console.log({error});
//     }
// },


// let file = req.file;

// let archivo;

// if (file) {
//     archivo = req.file.filename
// }   else {
//     archivo = "product-DEFAULT.png"
// }
// console.log(archivo);
    db.Productos.create({
        imagen: product-DEFAULT.png,
        name : req.body.name,
        price : req.body.price,
        color : req.body.color,
        description : req.body.description,
        size : req.body.size,
        category : req.body.category,
        stock : req.body.stock,
    })
    .then(()=>res.redirect ("products"))
},

modificarProducto: async (req, res) => {
    try {
        const producto = await db.Productos.findByPk(req.params.idUser);
        console.log(producto);
        res.render('/edit', { productos: productos });
    } catch (error) {
        console.log(error)
    }
},

actualizarProducto: async (req, res) => {
    let file = req.file;
    const productoEditado = db.Productos

    let archivo;

    if (file) {
        archivo = req.file.filename
    } else {

        archivo = productoEditado.imagen
    }

    try {
        await productoEditado.update({
              name : req.body.name,
              price : req.body.price,
              bought : req.body.bought,
              color : req.body.color,
              description : req.body.description,
              size : req.body.size,
              category : req.body.category,
              stock : req.body.stock,
              imagen: archivo
            },
        {
            where :{
                id_product : req.params.user_id
            }
        }
        )

         console.log({ productoEditado })
        res.redirect('/')
    } catch (error) {
        res.send({ error })
    }

},


borrarProducto: async(req,res)=>{
    try {
        const productoABorrar = await db.Productos.destroy({
            where:{
                id_product: req.params.id_user
            }
        });
            res.redirect('/')

    } catch (error) {
        
        console.log ({error})

    }
}
}


module.exports = productosController;

  //   productos: (req, res) => {
  //     const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
  //    /**
  //    *  logica     
  //    */   
  //       res.render("productos", { productos : productos });
  //   },

  //   details: (req, res) =>{
  //       const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
  //       const producto = productos.find((p) => p.id == req.params.id);                
  //       res.render("details", { producto : producto });
  //   },

  //   create: (req, res) => {
  //       const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
  //       res.render("product-create-form");
        
  //   },
    
	
	// // Create -  Method to store
  //   store: (req, res) => {
  //       const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
  //       console.log(req.body)
  
    
  //       const productoNuevo = {
  //         id: Date.now(),
  //         image: "default-image.png",
  //         name: req.body.name,
  //         price: req.body.price,
  //         bought: req.body.bought,
  //         color: req.body.color,
  //         description: req.body.description,
  //         size: req.body.description,
  //         category: req.body.category
  //         // armar array para recibir categorías
          
  //       };
    
  //       /**
  //        * si hay file guardan el nombre de la imagen
  //        */
  //        if (req.file) {
  //         productoNuevo.image = req.file.filename;
  //       }

  //       productos.push(productoNuevo);
    
  //       const data = JSON.stringify(productos, null, " ");
  //       fs.writeFileSync(productosFilePath, data);

  //       res.redirect("/productos/detail/id");
  //     },

	// // Update - Form to edit
	// edit: (req, res) => {
  //           const products = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
  //           const producto = products.find((p) => p.id == req.params.id);

  //           res.render("product-edit-form", { productoToEdit: producto });  
  //       },
        
	
	// // Update - Method to update
	// update: (req, res) => {
  //       const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
  //       console.log(req.body);
  //       console.log(req.params.id);
  //       console.log(req.file)

  //       productos.forEach((p) => {
  //           if (p.id == req.params.id) {
  //             p.name = req.body.name;
  //             p.price = req.body.price;
  //             p.bought = req.body.bought;
  //             p.color = req.body.color;
  //             p.description = req.body.description;
  //             p.size = req.body.size;
  //             p.category = req.body.category;
  //             p.stock = req.body.stock;
      
  //             if (req.file) {
  //               fs.unlinkSync("./public/img/" + p.image);
  //               p.image = req.file.filename;
  //               console.log(req.file.filename)
  //               if (producto && producto.image != "default-image.png") {
  //                 fs.unlinkSync("./public/img/" + producto.image);
           
  //               }
  //             }
  //           }
  //         });

  //         const data = JSON.stringify(productos, null, " ");
  //   fs.writeFileSync(productosFilePath, data);

  //   res.redirect("/productos/details/" + req.params.id);
	// },

	// // Delete - Delete one product from DB
	// delete : (req, res) => {
  //   let products = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));
  //   const producto = products.find((p) => p.id == req.params.id);

  //   products = products.filter((p) => p.id != req.params.id);

  //   if (producto && producto.image != "default-image.png") {
  //     fs.unlinkSync("./public/img/" + producto.image);
  //   }

  //   const data = JSON.stringify(products, null, " ");
  //   fs.writeFileSync(productosFilePath, data);
  //   res.redirect("/productos");
  // },

