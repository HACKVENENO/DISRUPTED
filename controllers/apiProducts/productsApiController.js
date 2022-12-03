const db = require("../../database/models");
const Op = db.sequelize.Op

const apiProductController = {
    list: (req, res) => {
        db.Productos
            .findAll()
            .then(productos => {
                return res.json(productos);
        })
    }
}
module.exports = apiProductController