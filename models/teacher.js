'use strict';
module.exports = (sequelize, DataTypes) => {
  const teacher = sequelize.define('teacher', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: DataTypes.STRING
  }, {});
  teacher.associate = function (models) {
    // associations can be defined here
  };
  return teacher;
};