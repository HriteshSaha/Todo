"use strict";
module.exports = (sequelize, DataTypes) => {
  const todoList = sequelize.define(
    "todoList",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      workDetails: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
    });

    // Defining Associations
    todoList.associate = (models) => {
      todoList.belongsTo(models.user, {foreignKey: 'userId', as: 'user'})
    }
  return todoList;
};
