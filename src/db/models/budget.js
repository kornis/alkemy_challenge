'use strict';
module.exports = (sequelize, DataTypes) => {
  const budget = sequelize.define('budget', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    deposit_name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    type:{
      type: DataTypes.ENUM('in','out'),
      nullable: false,
    }
  }, {
    tableName: 'budget',
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  });
  budget.associate = function(models) {
    // associations can be defined here
  };
  return budget;
};