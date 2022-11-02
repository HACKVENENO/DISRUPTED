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

        price: dataTypes.DECIMAL,

        color: dataTypes.STRING,

        description: dataTypes.STRING,

        size: dataTypes.STRING,

        category: dataTypes.STRING,

        stock: dataTypes.INTEGER,
    }

    const config = {
        tableName: 'products',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);
    
    return Producto;

}