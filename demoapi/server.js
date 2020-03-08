// Incluimos el módulo mediante require y creamos una aplicación de Express.

const express = require('express');
const app = express();

const bodyParser = require('body-parser')

// --------- BODY PARSER  -----------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));


// Definición de ruta que que se llamará cuando se realice una petición GET
// que ejecutará una función (callback) que nos envía un conjunto de caracteres
// como respuesta.

app.get('/', function(req, res) {
    res.send('Hola Mundo2');
});


// // ------------------ 04 ------------------------ 
// app.get('/pelicula', function(req, res) {
//     res.json({
//         "nombre": "El Señor de los Anillos",
//         "año": "2012"
//     })
// })

// let peliculas = [{
//         "id": "1",
//         "nombre": "Superman",
//         "año": "2012"
//     },
//     {
//         "id": "2",
//         "nombre": "Batman",
//         "año": "2014"
//     },
//     {
//         "id": "3",
//         "nombre": "El Señor de los Anillos",
//         "año": "2012"
//     }
// ]

// app.get('/peliculas', function(req, res) {
//     res.json(peliculas)
// })

// app.get('/usuario/:nombre/:edad', function(req, res) {
//     let nombre = req.params.nombre
//     let edad = req.params.edad

//     console.log(typeof(req.params));
//     // res.send(`Hola ${nombre}. Tienes  ${edad} años.`)
//     res.json(req.params)
// })

// app.get('/dni/:id([0-9]{8}[A-Z]{1})', function(req, res) {
//     res.send('DNI: ' + req.params.id);
// });

// app.get('*', function(req, res) {
//     res.send('...Parece que hay algún error');
// });

// // POST

// app.post('/nuevo', function(req, res) {
//     const { nombre, edad } = req.body;
//     if (nombre && edad) {
//         res.json({
//             status: "success",
//             nombre,
//             edad
//         });
//     } else {
//         res.json({
//             status: "fail",
//             message: "Falta algún parametro"
//         });
//     }

// });

// ****************+ 6

const apiRoutes = require('./routes/peliculasRoute');

app.use('/api', apiRoutes);

// ************* 7

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/apipeliculas', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        () => { console.log("Conexión a DB realizada"); },
        (err) => { console.log(`Error en la conexión a la DB${err}`); },
    );


// Define y crea el servidor, escuchando el puerto 3000 
// e imprime un comentario en la consola.

app.listen(3000, function() {
    console.log('Servidor escuchando en el puerto 3000!');
});