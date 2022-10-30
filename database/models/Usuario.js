const { Sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const alias = 'Usuarios';

    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        image: dataTypes.STRING,

        name: dataTypes.STRING,

        lastName: dataTypes.STRING,

        email: dataTypes.STRING,

        gender: dataTypes.INTEGER,

        productosComprados: dataTypes.STRING,

    }

    const config = {
        tableName: 'users',
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsToMany(models.Producto, {
            as: "products",
            through: "usuarios_productos",
            foreingKey: "productosComprados",


        })
    }


    
    return Usuario;

    


}