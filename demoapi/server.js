// server.js

// Incluimos el módulo con require y creamos una aplicación de Express.

const express = require('express');
const app = express();

const bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true, // permite el uso de rich objects y arreglos codificados
}));

// Definición de ruta que que se llamará cuando se realice una petición GET
// que ejecutará una función (callback) que nos envía un conjunto de caracteres
// como respuesta.

// server.js

const apiRoutes = require('./routes/peliculaRoute');

app.use('/api', apiRoutes);

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