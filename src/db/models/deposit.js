'use strict';
module.exports = (sequelize, DataTypes) => {
  const deposit = sequelize.define('deposit', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    deposit_name: DataTypes.STRING,
    qty: DataTypes.INTEGER
  }, {
    tableName: 'deposit',
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  });
  deposit.associate = function(models) {
    // associations can be defined here
  };
  return deposit;
};