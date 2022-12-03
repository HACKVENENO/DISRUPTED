const { Sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {

    const alias = 'Genero';

    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        nombre: dataTypes.STRING,

    }

    const config = {
        tableName: 'genero',
        timestamps: false
    }

    const Genero = sequelize.define(alias, cols, config);
    
    Genero.associate = function(models) {
        Genero.hasMany(models.Productos,{
            as:"Productos",
            foreignKey:"id_genero"
        })

    }

    return Genero;

}