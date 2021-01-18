'use strict';
module.exports = (sequelize, DataTypes) => {
  const budget = sequelize.define('budget', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    movement_name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    type:{
      type: DataTypes.ENUM('in','out'),
      nullable: false,
    },
    date: DataTypes.DATE,
    user_id: {
      type: DataTypes.BIGINT,
      foreignKey: true,
    }
  }, {
    tableName: 'budget',
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  });
  budget.associate = function(models) {
    budget.belongsTo(models.users,{
      as: "user",
      foreignKey: "user_id"
    })
  };
  return budget;
};