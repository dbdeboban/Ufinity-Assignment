'use strict';
module.exports = (sequelize, DataTypes) => {
  const teacher = sequelize.define('teacher', {
    email: DataTypes.STRING
  }, {});
  teacher.associate = function(models) {
    // associations can be defined here
  };
  return teacher;
};