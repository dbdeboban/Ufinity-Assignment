const express = require('express');
const db = require('../models/index');
const router = express.Router();
const emailRex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

router.post('/register', (req, res, next) => {
    let teacher = req.body.teacher;
    let students = req.body.students;
    let flag = true;
    if (emailRex.test(teacher) === true) {
        students.forEach(email => {
            if (emailRex.test(email) === false) {
                flag = false;
            }
        });
    } else {
        flag = false;
    }
    if (flag === true) {
        db.registration.findAll({
            attributes: ['studentEmail'],
            raw: true,
            where: {
                teacherEmail: teacher
            }
        }).then(studentEmails => {
            registrationArray = [];
            registeredStudents = [];
            studentEmails.forEach(studentEmail => {
                registeredStudents.push(studentEmail['studentEmail']);
            });

            students.forEach(email => {
                if (registeredStudents.includes(email) === false) {
                    registrationArray.push({ teacherEmail: teacher, studentEmail: email });
                }
            });
            if (registrationArray.length > 0) {
                db.registration.bulkCreate(registrationArray).then(() => {
                    res.status(204).end();
                }).catch(error => {
                    res.status(400).json({ message: "Invalid Request format" });
                });
            } else {
                res.status(400).json({ message: "All Students Already Registered" });
            }
        }).catch(error => {
            res.status(400).json({ message: "Invalid Teacher Email" }).end();
        });
    } else {
        res.status(400).json({ message: "Invalid Teacher or Student Email Format" });
    }
});

router.get('/commonstudents', (req, res, next) => {
    let teachers = req.query.teacher;
    let flag = true;
    let errorOccur = false;
    let commonStudents = [];
    let count = 0;
    let teacherArray = []
    if (typeof teachers !== 'undefined') {
        teacherArray = teachers.toString().split(',');
        teacherArray.forEach(email => {
            if (emailRex.test(email) === false) {
                flag = false;
            }
        });
    } else {
        flag = false;
    }
    if (flag === true) {
        teacherArray.forEach(email => {
            db.registration.findAll({
                attributes: ['studentEmail'],
                raw: true,
                where: {
                    teacherEmail: email
                }
            }).then(emails => {
                if (count == 0) {
                    emails.forEach(studentEmail => {
                        commonStudents.push(studentEmail['studentEmail']);
                    });
                } else {
                    arr = []
                    emails.forEach(studentEmail => {
                        arr.push(studentEmail['studentEmail']);
                    });
                    commonStudents = intersection(commonStudents, arr)
                }
                count++;
                sendResponse();
            }).catch(error => {
                res.status(400).end();
                errorOccur = true;
            });

        });
        function intersection(a, b) {
            return a.filter(Set.prototype.has, new Set(b));
        }
        function sendResponse() {
            if (count == teacherArray.length) {
                data = { "students": commonStudents };
                res.status(200).json(data);
            }
        }
    } else {
        res.status(400).json({ message: "Invalid Email of Teacher or Invalid Request" })
    }
});

router.post('/suspend', (req, res, next) => {
    const studentEmail = req.body.student;
    if (typeof studentEmail !== 'undefined' && emailRex.test(studentEmail)) {
        db.student.update({
            isSuspend: false
        }, {
                where: {
                    email: studentEmail
                }
            }).then(() => {
                res.status(204).end();
            }).catch(error => {
                res.status(400).json({ message: error });
            });
    } else {
        res.status(400).json({ message: "Invalid Email or Invalid Request" });
    }
});

router.post('/retrievefornotifications', (req, res, next) => {
    const teacherEmail = req.body.teacher;
    const notification = req.body.notification;
    let allStudents = [];
    let recipientArray = [];
    for (i = 0; i < notification.length; i++) {
        curChar = notification.charAt(i);
        prevChar = notification.charAt(i - 1);
        if (curChar == "@" && prevChar == " ") {
            i++;
            email = ""
            while (notification.charAt(i) != " " && i < notification.length) {
                email += notification.charAt(i);
                i++;
            }
            recipientArray.push(email);
        }
    }
    if (typeof teacherEmail !== 'undefined' && emailRex.test(teacherEmail)) {
        db.registration.findAll({
            attributes: ['studentEmail'],
            raw: true,
            where: {
                teacherEmail: teacherEmail
            }
        }).then(studentEmails => {
            studentEmails.forEach(studentEmail => {
                allStudents.push(studentEmail['studentEmail']);
            });
            addToRecipient();
        }).catch(error => {
            res.status(400).end();
        });
        let errorOccured = 0;
        async function addToRecipient() {
            let studentsNotSuspend = await db.student.findAll({
                attributes: ['email'],
                raw: true,
                where: {
                    isSuspend: false
                }
            });
            finalRecipientResponse(studentsNotSuspend);
        }
        function finalRecipientResponse(studentsArray) {
            let studentsNotSuspended =[];
            studentsArray.forEach(student => {
                studentsNotSuspended.push(student['email']);
            });
            console.log(allStudents);
            console.log(studentsNotSuspended);
            studentsNotSuspended = studentsNotSuspended.filter(Set.prototype.has, new Set(allStudents));
            recipientArray.push(...studentsNotSuspended);
            data = { "recipients": recipientArray }
            if (errorOccured == 0) {
                res.status(200).json(data);
            }
        }
    } else {
        res.status(400).json({ message: "Invalid Teacher Email or Invalid request body" })
    }

})
module.exports = router;