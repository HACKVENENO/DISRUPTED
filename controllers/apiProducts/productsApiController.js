const db = require("../../database/models");
const Op = db.sequelize.Op

const apiProductController = {
        productos : async (req,res) => {
            try {
                let product = await db.Productos.findAll()
                // let generos = [];
                // for (let i = 1; i < 2; i ++ ){
                //     let contador = product.filter((p)=> p.id_genre == i )
                //     generos.push(contador.length)
                // }
                let productos = product.map((producto)=> {
                    return {
                        count: product.length,
                        // countByCategory: { 
                        //     // category: category.length
                        // }, 
                        data: {
                            id : producto.id,
                            nombre : producto.name,
                            description: producto.description,
                            detail: 'http://localhost:3040/api/v1/products/' + producto.id,
                            category:producto.category,
                    }
                    }
                })
                res.status(200).json({productos})
        } catch (error) {
            console.log({error})
        }

    },
    detalle : async (req, res) => {
        try {
            const producto = await db.Productos.findByPk(req.params.id);
            const productos = {
                data: {
                    id: producto.id,
                    imagen : producto.image,
                    nombre: producto.name,
                    precio: producto.price,
                    color: producto.color,
                    descripcion: producto.description,
                    talle: producto.size,
                    category: producto.category,
                    stock: producto.stock,
                }
            }
            res.json({productos});

        } catch (error) {
                console.log({error})
            }
        
    },

}
module.exports = apiProductController