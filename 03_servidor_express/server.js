// Incluimos el módulo mediante require y creamos una aplicación de Express.

const express = require('express');
const app = express();

// Definición de ruta que que se llamará cuando se realice una petición GET
// que ejecutará una función (callback) que nos envía un conjunto de caracteres
// como respuesta.

app.get('/', function(req, res) {
    res.send('Hola Trassierra');
});

// Define y crea el servidor, escuchando el puerto 3000 
// e imprime un comentario en la consola.

app.listen(3000, function() {
    console.log('Servidor escuchando en el puerto 3000!');
});