'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: DataTypes.STRING,
    isSuspend: DataTypes.BOOLEAN,

  }, {});
  student.associate = function (models) {
    // associations can be defined here
  };
  return student;
};