var superagent = require('superagent');
var expect = require('expect');

var url = 'http://localhost:3000/api/';

describe('Getting Common Students', function () {
    it('Getting students from single teacher', function (done) {
        superagent
            .get(`${url}commonstudents`)
            .query({ teacher: "teacherken@gmail.com" })
            .end(function (e, res) {
                expect(res.status).toEqual(200);
                done();
            });
    });

    it('Getting students of multiple teachers', function (done) {
        superagent
            .get(`${url}commonstudents`)
            .query({ teacher: ["teacherken@gmail.com","teacherjon@gmail.com"] })
            .end(function (e, res) {
                expect(res.status).toEqual(200);
                done();
            });
    });

    it('Teacher Email Invalid', function (done) {
        superagent
            .get(`${url}commonstudents`)
            .query({ teacher: ['eacherkegmail.com','teacherjonmail.com'] })
            .end(function (e, res) {
                expect(res.status).toEqual(400);
                done();
            });
    });
});