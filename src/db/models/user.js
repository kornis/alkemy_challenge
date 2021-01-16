const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        id:{
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        deleted_at: DataTypes.TIMESTAMPS,
        updated_at: DataTypes.TIMESTAMPS,
        created_at: DataTypes.TIMESTAMPS
    },
    {
        tableName: 'users',
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    })
    
    return User;
}