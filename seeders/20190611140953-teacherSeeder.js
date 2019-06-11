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
    return queryInterface.bulkInsert('teachers', 
    [{ "email": "thebblewaite0@nydailynews.com", "updatedAt": "2019-05-12 09:42:19", "createdAt": "2018-11-12 05:58:13" },
    { "email": "teacherken@gmail.com", "updatedAt": "2018-10-19 18:23:20", "createdAt": "2018-07-03 21:34:59" },
    { "email": "teacherbob@gmail.com", "updatedAt": "2018-10-19 18:23:20", "createdAt": "2018-07-03 21:34:59" },
    { "email": "teacherlob@gmail.com", "updatedAt": "2018-10-19 18:23:20", "createdAt": "2018-07-03 21:34:59" },
    { "email": "ebradforth1@sciencedirect.com", "updatedAt": "2018-10-19 18:23:20", "createdAt": "2018-07-03 21:34:59" },
    { "email": "dbury2@cafepress.com", "updatedAt": "2019-05-23 22:49:13", "createdAt": "2018-11-03 11:54:05" },
    { "email": "gwebling3@netvibes.com", "updatedAt": "2019-02-20 12:26:00", "createdAt": "2019-03-16 02:17:59" },
    { "email": "cmenendes4@odnoklassniki.ru", "updatedAt": "2019-03-13 08:08:08", "createdAt": "2018-09-30 08:45:14" },
    { "email": "bburnie5@imgur.com", "updatedAt": "2018-08-30 19:46:37", "createdAt": "2018-12-12 14:17:38" },
    { "email": "agarie6@tripod.com", "updatedAt": "2018-10-27 12:13:20", "createdAt": "2019-01-23 19:26:13" },
    { "email": "ctolworthie7@blogger.com", "updatedAt": "2019-02-12 01:03:50", "createdAt": "2019-02-22 23:59:06" },
    { "email": "rconningham8@china.com.cn", "updatedAt": "2018-08-13 23:17:11", "createdAt": "2019-01-12 20:30:36" },
    { "email": "jrekes9@com.com", "updatedAt": "2018-10-19 02:06:34", "createdAt": "2019-03-30 17:52:48" },
    { "email": "ljeaffersona@sogou.com", "updatedAt": "2018-11-25 08:11:21", "createdAt": "2018-09-23 07:58:19" },
    { "email": "hgyppsb@360.cn", "updatedAt": "2018-08-02 03:51:17", "createdAt": "2018-08-16 02:17:10" },
    { "email": "svanbaarenc@sciencedaily.com", "updatedAt": "2018-12-07 23:23:35", "createdAt": "2019-03-21 16:28:55" },
    { "email": "chowshipd@ebay.com", "updatedAt": "2018-12-27 05:23:09", "createdAt": "2018-08-07 13:24:22" },
    { "email": "bmeriote@ed.gov", "updatedAt": "2018-11-16 14:35:18", "createdAt": "2019-05-16 14:27:26" },
    { "email": "mblowfeldef@booking.com", "updatedAt": "2018-10-14 20:39:48", "createdAt": "2019-05-24 09:03:34" },
    { "email": "mbalesg@pen.io", "updatedAt": "2019-01-20 03:29:07", "createdAt": "2018-08-14 22:19:09" },
    { "email": "kbrackenburyh@google.it", "updatedAt": "2019-01-07 19:40:09", "createdAt": "2018-10-10 04:13:12" },
    { "email": "atrattoni@yelp.com", "updatedAt": "2019-03-10 02:28:26", "createdAt": "2018-07-23 18:13:59" },
    { "email": "zhabardj@statcounter.com", "updatedAt": "2018-08-02 20:35:11", "createdAt": "2019-01-26 16:00:24" }], 
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
