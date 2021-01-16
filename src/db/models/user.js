module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        id:{
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.STRING,
        deleted_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        created_at: DataTypes.DATE
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