const express = require('express');
const db = require('../models/index');
const router = express.Router();

//email Regex for validation
const emailRex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//teacher registering students
router.post('/register', (req, res, next) => {
    let teacher = req.body.teacher;
    let students = req.body.students;
    let flag = true;

    //validation of email
    if (emailRex.test(teacher) === true) {
        students.forEach(email => {
            if (emailRex.test(email) === false) {
                flag = false;
            }
        });
    } else {
        flag = false;
    }
    //executes if emails valid
    if (flag === true) {
        //finding all registered Student of given teacher
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
            
            //checks if student already registered
            students.forEach(email => {
                if (registeredStudents.includes(email) === false) {
                    registrationArray.push({ teacherEmail: teacher, studentEmail: email });
                }
            });
            if (registrationArray.length > 0) {
                //registers student if not already registered
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

//Finding common students between teachers
router.get('/commonstudents', (req, res, next) => {
    let teachers = req.query.teacher;
    let flag = true;
    let commonStudents = [];
    let count = 0;
    let teacherArray = []

    //validation of emails
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

    //executes if all emails valid
    if (flag === true) {
        //finding students registered with every teacher
        teacherArray.forEach(email => {
            db.registration.findAll({
                attributes: ['studentEmail'],
                raw: true,
                where: {
                    teacherEmail: email
                }
            }).then(emails => {
                //checking if first teacher
                if (count == 0) {
                    emails.forEach(studentEmail => {
                        commonStudents.push(studentEmail['studentEmail']);
                    });
                } else {
                    arr = []
                    emails.forEach(studentEmail => {
                        arr.push(studentEmail['studentEmail']);
                    });

                    //keeping all the students common between two teachers
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

//teacher suspends a student
router.post('/suspend', (req, res, next) => {
    const studentEmail = req.body.student;
    //executes if student email valid
    if (typeof studentEmail !== 'undefined' && emailRex.test(studentEmail)) {
        db.student.update({
            isSuspend: true
        }, {
                where: {
                    email: studentEmail
                }
            }).then(() => {
                res.status(204).end();
            }).catch(error => {
                res.status(400).json({ message: "Invalid Email or Invalid Request" });
            });
    } else {
        res.status(400).json({ message: "Invalid Email or Invalid Request" });
    }
});

//retrieves notification recipient list
router.post('/retrievefornotifications', (req, res, next) => {
    const teacherEmail = req.body.teacher;
    const notification = req.body.notification;
    let allStudents = [];
    let recipientArray = [];

    //extracting student email from notification if any
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
    //executes if teacher email valid
    if (typeof teacherEmail !== 'undefined' && emailRex.test(teacherEmail)) {
        //finds all students of given teacher
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
            findStudNotSuspend();
        }).catch(error => {
            res.status(400).end();
        });
        let errorOccured = 0;

        //finds all students who are not suspended
        async function findStudNotSuspend() {
            let studentsNotSuspend = await db.student.findAll({
                attributes: ['email'],
                raw: true,
                where: {
                    isSuspend: false
                }
            });
            finalRecipientResponse(studentsNotSuspend);
        }

        //intersection of student under teacher and student not suspended
        //creating success response of recipients
        function finalRecipientResponse(studentsArray) {
            let studentsNotSuspended = [];
            studentsArray.forEach(student => {
                studentsNotSuspended.push(student['email']);
            });
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