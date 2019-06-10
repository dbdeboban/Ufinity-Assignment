const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const teacherAdminRoutes = require('./routes/teacherAdmin');

app.use('/api', teacherAdminRoutes);

app.listen(config.port, err => {
    console.log('Server accessible on port :' + port);
});
