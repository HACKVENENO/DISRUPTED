const db = require("../../database/models");
const Op = db.sequelize.Op

const apiUserController = {
    list: (req, res) => {
        db.Usuario
            .findAll()
            .then(users => {
                return res.json(users);
        })
    }
}
module.exports = apiUserController