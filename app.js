const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { sequelize } = require('./src/models');

const departmentRoute = require('./src/routes/departmentRoute');
const jabatanRoute = require('./src/routes/jabatanRoute');
const karyawanRoute = require('./src/routes/karyawanRoute');

app.use(bodyParser.json());

app.use('/test', (req, res) => {
    res.send('Server connected!');
});
app.use('/departments', departmentRoute);
app.use('/jabatans', jabatanRoute);
app.use('/karyawans', karyawanRoute);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
