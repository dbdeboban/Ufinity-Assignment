'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    email: DataTypes.STRING,
    isSuspend: type.BOOLEAN
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};