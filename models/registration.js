'use strict';
module.exports = (sequelize, DataTypes) => {
  const registration = sequelize.define('registration', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    studentEmail: DataTypes.STRING,
    teacherEmail: DataTypes.STRING
  }, {});
  registration.associate = function(models) {
    // associations can be defined here
  };
  return registration;
};