var superagent = require('superagent');
var expect = require('expect');

var url = 'http://localhost:3000/api/';

describe('Suspend Student',function(){
    it('Suspend one student',function(done){
        superagent
            .post(`${url}suspend`)
            .send({
                "student": "studenthon@example.com" 
            })
            .end(function (e, res) {
                expect(res.status).toEqual(204);
                done();
            });
    });
    
    it('Student Email or Request Body Invalid',function(done){
        superagent
            .post(`${url}suspend`)
            .send({
                'student': 'studenjon'
            })
            .end(function (e, res) {
                expect(res.status).toEqual(400);
                expect(res.body.message).toEqual("Invalid Email or Invalid Request");
                done();
            });
    });
});