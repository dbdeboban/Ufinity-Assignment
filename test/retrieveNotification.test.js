var superagent = require('superagent');
var expect = require('expect');

var url = 'http://localhost:3000/api/';

describe('Notification recipients from database', function () {
    it('Students enrolled to teacher', function (done) {
        superagent
            .post(`${url}retrievefornotifications`)
            .send({
                "teacher": "teacherken@gmail.com",
                "notification": "Welcome to the course"
            })
            .end(function (e, res) {
                expect(res.status).toEqual(200);
                done();
            });
    });

    it('Students Enrolled or mentioned in notification', function (done) {
        superagent
            .post(`${url}retrievefornotifications`)
            .send({
                'teacher': 'teacherken@gmail.com',
                "notification": "Hello students! @studentagnes@example.com @studentmiche@example.com"
            })
            .end(function (e, res) {
                expect(res.status).toEqual(200);
                done();
            });
    });

});