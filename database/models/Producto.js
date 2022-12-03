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

        id_genero: dataTypes.INTEGER,
    }

    const config = {
        tableName: 'productos',
        timestamps: false
    }

    const Productos = sequelize.define(alias, cols, config);
    
    Productos.associate = function(models) {
        Productos.belongsTo(models.Genero,{
            as:"Genero",
            foreignKey:"id"
        })

    }

    return Productos;

}