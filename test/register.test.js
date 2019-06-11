var superagent = require('superagent');
var expect = require('expect');
var url = 'http://localhost:3000/api/';

describe('Register new students', function () {
    it('Registering One Student', function (done) {
        superagent
            .post(`${url}register`)
            .send({
                "teacher": "teacherboo@gmail.com",
                "students":
                    [
                        "studentkemp@example.com"
                    ]
            })
            .end(function (e, res) {
                expect(res.status).toBe(204);
                done();
            });
    });
    it('Registering Multiple Students', function (done) {
        superagent
            .post(`${url}register`)
            .send({
                "teacher": "teacherzen@gmail.com",
                "students":
                    [
                        "studentpro@example.com",
                        "studentdon@example.com",
                        "studentkos@example.com"
                    ]
            })
            .end(function (e, res) {
                expect(e).toEqual(null);
                expect(res.status).toEqual(204);
                done();
            });
    });
    it('Student Email Invalid', function (done) {
        superagent
            .post(`${url}register`)
            .send({
                "teacher": "acherkengmai.com",
                "students": ["studejexample.com",
                    "sdenhonexample.com",
                    "studentjuieexample.com"]
            })
            .end(function (e, res) {
                expect(res.status).toEqual(400);
                done();
            });
    })
    it('Teacher Email Invalid', function (done) {
        superagent
            .post(`${url}register`)
            .send({
                "teacher": "acherkengmai.com",
                "students": ["studejon@example.com",
                    "sdenhon@example.com",
                    "studentjuie@example.com"]
            })
            .end(function (e, res) {
                expect(res.status).toEqual(400);
                done();
            });
    })
    it('Request Body Invalid', function (done) {
        superagent
            .post(`${url}register`)
            .send({
                "sent": "no true"
            })
            .end(function (e, res) {
                expect(res.status).toEqual(400);
                done();
            });
    })
    it('Cannot register same student twice', function (done) {
        superagent
            .post(`${url}register`)
            .send({
                "teacher": "teacherken@gmail.com",
                "students":
                    [
                        "studentjon@example.com",
                        "studenthon@example.com",
                        "studentgro@example.com"
                    ]
            })
            .end(function (e, res) {
                expect(res.status).toEqual(400);
                done();
            });
    });
});