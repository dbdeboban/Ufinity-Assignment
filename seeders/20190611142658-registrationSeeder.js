'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('registrations',
      [{ studentEmail: 'studentbon@example.com', teacherEmail: 'teacherken@gmail.com', createdAt: '2019-06-11 03:20:52', updatedAt: '2019-06-11 03:20:52' },
      { studentEmail: 'studentchon@example.com', teacherEmail: 'teacherken@gmail.com', createdAt: '2019-06-11 03:20:52', updatedAt: '2019-06-11 03:20:52' },
      { studentEmail: 'studentjon@example.com', teacherEmail: 'teacherken@gmail.com', createdAt: '2019-06-11 03:26:51', updatedAt: '2019-06-11 03:26:51' },
      { studentEmail: 'studenthon@example.com', teacherEmail: 'teacherken@gmail.com', createdAt: '2019-06-11 03:26:51', updatedAt: '2019-06-11 03:26:51' },
      { studentEmail: 'studentjon@example.com', teacherEmail: 'teacherbob@gmail.com', createdAt: '2019-06-11 04:22:01', updatedAt: '2019-06-11 04:22:01' },
      { studentEmail: 'studenthon@example.com', teacherEmail: 'teacherbob@gmail.com', createdAt: '2019-06-11 04:22:01', updatedAt: '2019-06-11 04:22:01' },
      { studentEmail: 'studentjon@example.com', teacherEmail: 'teacherlob@gmail.com', createdAt: '2019-06-11 06:07:14', updatedAt: '2019-06-11 06:07:14' },
      { studentEmail: 'studenthon@example.com', teacherEmail: 'teacherlob@gmail.com', createdAt: '2019-06-11 06:07:14', updatedAt: '2019-06-11 06:07:14' },
      { studentEmail: 'studentgro@example.com', teacherEmail: 'teacherlob@gmail.com', createdAt: '2019-06-11 06:07:14', updatedAt: '2019-06-11 06:07:14' }],
      {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};


