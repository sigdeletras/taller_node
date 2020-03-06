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

app.get('/pelicula', function(req, res) {
    res.json({
        "nombre": "El Señor de los Anillos",
        "año": "2012"
    })
})

let peliculas = [{
        "id": "1",
        "nombre": "Superman",
        "año": "2012"
    },
    {
        "id": "2",
        "nombre": "Batman",
        "año": "2014"
    },
    {
        "id": "3",
        "nombre": "El Señor de los Anillos",
        "año": "2012"
    }
]

app.get('/peliculas', function(req, res) {
    res.json(peliculas)
})

// parametros de request
app.get('/usuario/:nombre/:edad', function(req, res) {
    let nombre = req.params.nombre
    let edad = req.params.edad
    res.send(`Hola ${nombre}. Tienes  ${edad} años.`)
})

// Rutas con expresiones regulares
app.get('/dni/:id([0-9]{8}[A-Z]{1})', function(req, res) {
    res.send('DNI: ' + req.params.id);
});

app.get('*', function(req, res) {
    res.send('No es una URL correcta.');
});

/// Post
// Dependencias y postman
app.post('/pelicula/nueva', function(req, res) {
    const { titulo, año } = req.body;
    res.json({
        status: "success",
        titulo,
        año
    });
});


app.post('/pelicula/nueva2', function(req, res) {
    var titulo = req.body.titulo;
    var año = req.body.año;
    if (titulo && año) {
        res.json({
            status: "success",
            data: req.body
        });
    } else {
        res.status(400).json({
            status: "fail",
            message: "Falta el título y/o el año"
        });

    }

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

module.exports = app; // Para test