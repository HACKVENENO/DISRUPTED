const db = require("../../database/models");
const Op = db.sequelize.Op
const { Sequelize } = require("sequelize");


const apiProductController = {
        
        categorias: async (req, res) => {
            try{
            let product = await db.Productos.findAll()
            let categorias = await db.Productos.findAll({
                attributes: ["category",
                [Sequelize.fn("COUNT", Sequelize.col("category")), "productosPorCategoria"],
            ],
                group: "category"
            });

            let countByCategory = {
                count: product.length,
                categorias
            }
            res.status(200).json({countByCategory})
        } catch (error) {
            console.log({error})       
        }
        },

        productos : async (req,res) => {
            try {
                let product = await db.Productos.findAll()
                // let categorias = await db.Productos.findAll({
                //     attributes: ["category",
                //     [Sequelize.fn("COUNT", Sequelize.col("category")), "productosPorCategoria"],
                // ],
                //     group: "category"
                // });
                
                let productos = product.map((producto)=> {
                    return {
                        // count: product.length,
                        // countByCategory: { 
                        //     categorias

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
                    imagen : 'http://localhost:3040/img/' + producto.image,
                    nombre: producto.name,
                    precio: producto.price,
                    color: producto.color,
                    descripcion: producto.description,
                    talle: producto.size,
                    category: producto.category,
                    stock: producto.stock
                }
            }
            res.status(200).json({ productos });

        } catch (error) {
                console.log({error})
            }
        
    },

}
module.exports = apiProductController

