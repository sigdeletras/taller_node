// Using Node.js `require()`

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const mongoose = require('mongoose');

// ****** 04. Peticiones **************

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {
    res.json({
        status: "success",
        message: "Hola Trassierra"
    });
});

// ****** 05. servidor estáticos **************

app.use('/static', express.static(__dirname + '/public'));

// ****** 06. rutas **************

app.use('/api', apiRoutes);

// ****** 07. Conexión de db **************

// await mongoose.connect('mongodb://localhost:27017/demoapi', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connect('mongodb://localhost:27017/demoapi', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        () => { console.log("Conexión a DB realizada"); },
        (err) => { console.log(`Error en la conexión a la DB${err}`); },
    );

app.listen(3000, function() {
    console.log('Servidor escuchando en el puerto 3000!');
});

// module.exports = app; // Para test