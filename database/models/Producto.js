const { Sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const alias = 'Productos';

    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        image: dataTypes.STRING,

        name: dataTypes.STRING,

        price: X,

        color: X,

        description: X,

        size: X,

        category: X,

        stock: X
    }

    const config = {
        tableName: 'products',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);
    
    return Producto;

}