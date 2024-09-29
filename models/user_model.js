'use strict';

module.exports = (sequelize, DataType)=> {
  const user = sequelize.define(
    "user",
    {
      firstName: {
        type: DataType.STRING,
        allowNull: false
      },
      lastName: {
        type: DataType.STRING,
        allowNull: false
    },
    email: {
      type: DataType.STRING,
      allowNull: false
    },
    password: {
      type: DataType.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true
  });

  user.associate = (models)=> {
    user.hasMany(models.todoList, {foreignKey: 'userId', as: 'todos'})
  }

  return user
}