const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const apiRoutes = require('./routes/apiRoutes');

app.get('/', function(req, res) {
    res.json({
        status: "success",
        message: "Hola Trassierra"
    });
});

app.use('/api', apiRoutes);

app.listen(3000, function() {
    console.log('Servidor escuchando en el puerto 3000!');
});

module.exports = app; // Para test