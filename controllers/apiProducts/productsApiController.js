const db = require("../../database/models");
const Op = db.sequelize.Op

const apiProductController = {
        productos : async (req,res) => {
            try {
                let product = await db.Productos.findAll()
                let productos=product.map((producto)=> {
                    return {
                        id : producto.id_product,
                        nombre : producto.nombre,
                        caracteristicas : producto.caracteristicas,
                        url : 'http://localhost:3005/api/v1/producto/' + producto.id,
                        category:producto.category
                    }
                })
                res.status(200).json({productos})
        } catch (error) {
            console.log({error})
        }

    },
    detalle : async (req, res) => {
    try {
        const user = await db.Usuario.findByPk(req.params.id);
        res.json({ user: user});

    } catch (error) {
            console.log({error})
        }

    },

}
module.exports = apiProductController