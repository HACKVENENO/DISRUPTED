const db = require("../../database/models");
const Op = db.sequelize.Op


const apiUserController = {
    usuarios : async (req,res) => {
                try {
                    let user = await db.Usuario.findAll()
                    let usuarios = user.map((usuario) => {
                        return {
                            count: user.length, 
                        data: {
                            id: usuario.id,
                            nombre: usuario.name,
                            email: usuario.email,
                            detail: 'http://localhost:3040/api/v1/users/' + usuario.id
                        }
                        }
                    })
                    res.status(200).json({usuarios})
            } catch (error) {
                console.log({error})
            }
        
    },
    detalle : async (req, res) => {
        try {
            const user = await db.Usuario.findByPk(req.params.id);
            const users = {
                data: {
                    id: user.id,
                    nombre: user.name,
                    email: user.email,
                    image: 'img/profile/' + user.image 
                }
            }
            res.status(200).json({ users });

        } catch (error) {
                console.log({error})
            }
        
    },


}
module.exports = apiUserController
