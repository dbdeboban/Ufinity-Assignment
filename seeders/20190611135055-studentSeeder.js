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
    return queryInterface.bulkInsert('students',
      [
        { "email": "deb@gmail.com", "isSuspend": false, "createdAt": "2019-06-11 00:00:00", "updatedAt": "2019-06-11 07:05:15" },
        { "email": "studenthon@example.com", "isSuspend": false, "createdAt": "2019-06-11 00:00:00", "updatedAt": "2019-06-11 00:00:00" },
        { "email": "studentbon@example.com", "isSuspend": false, "createdAt": "2019-06-11 00:00:00", "updatedAt": "2019-06-11 00:00:00" },
        { "email": "studentchon@example.com", "isSuspend": false, "createdAt": "2019-06-11 00:00:00", "updatedAt": "2019-06-11 00:00:00" },
        { "email": "studentjon@example.com", "isSuspend": false, "createdAt": "2019-06-11 00:00:00", "updatedAt": "2019-06-11 00:00:00" },
        { "email": "studentgro@example.com", "isSuspend": false, "createdAt": "2019-06-11 00:00:00", "updatedAt": "2019-06-11 00:00:00" },
        { "email": "baner@example.com", "isSuspend": false, "createdAt": "2019-06-11 00:00:00", "updatedAt": "2019-06-11 00:00:00" },
        { "email": "htapply0@diigo.com", "updatedAt": "2018-08-24 13:10:40", "createdAt": "2018-10-07 16:20:30", "isSuspend": true },
        { "email": "hanney1@irs.gov", "updatedAt": "2018-09-08 23:08:18", "createdAt": "2019-01-12 00:30:53", "isSuspend": false },
        { "email": "ccamilletti2@t-online.de", "updatedAt": "2018-11-29 23:20:28", "createdAt": "2019-02-09 01:29:38", "isSuspend": false },
        { "email": "fventura3@google.fr", "updatedAt": "2018-07-23 00:13:01", "createdAt": "2018-12-06 20:17:16", "isSuspend": true },
        { "email": "crichen4@msu.edu", "updatedAt": "2018-11-14 11:03:36", "createdAt": "2019-05-06 16:41:46", "isSuspend": false },
        { "email": "zelwin5@europa.eu", "updatedAt": "2018-08-29 05:53:41", "createdAt": "2019-04-06 18:49:21", "isSuspend": true },
        { "email": "cdewdeny6@rediff.com", "updatedAt": "2019-01-07 18:14:17", "createdAt": "2018-08-31 16:28:57", "isSuspend": true },
        { "email": "aewdale7@nasa.gov", "updatedAt": "2019-03-23 04:25:50", "createdAt": "2018-10-05 12:42:47", "isSuspend": false },
        { "email": "fgrent8@printfriendly.com", "updatedAt": "2019-01-29 12:57:42", "createdAt": "2018-10-30 13:11:29", "isSuspend": true },
        { "email": "jmalthouse9@alexa.com", "updatedAt": "2019-03-16 10:41:31", "createdAt": "2018-10-01 01:17:26", "isSuspend": true },
        { "email": "lluscotta@washington.edu", "updatedAt": "2018-12-04 15:07:10", "createdAt": "2018-08-23 22:40:19", "isSuspend": true },
        { "email": "eclyantb@washingtonpost.com", "updatedAt": "2018-10-25 08:00:48", "createdAt": "2019-03-04 00:25:51", "isSuspend": false },
        { "email": "irosetc@opera.com", "updatedAt": "2018-11-05 01:56:05", "createdAt": "2019-01-15 04:41:01", "isSuspend": false },
        { "email": "mhatchelld@jalbum.net", "updatedAt": "2019-04-12 11:09:12", "createdAt": "2018-06-18 04:04:08", "isSuspend": true },
        { "email": "fwaudbye@yolasite.com", "updatedAt": "2018-07-29 00:16:54", "createdAt": "2019-01-24 11:40:54", "isSuspend": true },
        { "email": "dransburyf@biglobe.ne.jp", "updatedAt": "2019-04-05 07:18:33", "createdAt": "2018-11-05 23:41:20", "isSuspend": false },
        { "email": "mbartkeg@ucoz.com", "updatedAt": "2018-08-06 19:57:35", "createdAt": "2018-12-20 18:36:16", "isSuspend": true },
        { "email": "mrumbleh@cmu.edu", "updatedAt": "2018-08-31 23:29:44", "createdAt": "2019-03-09 14:16:03", "isSuspend": true },
        { "email": "dmozzinii@google.es", "updatedAt": "2019-01-05 12:47:25", "createdAt": "2018-08-22 16:13:49", "isSuspend": true },
        { "email": "lmaseykj@google.es", "updatedAt": "2018-09-25 14:45:28", "createdAt": "2019-05-12 23:45:03", "isSuspend": true }],
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
