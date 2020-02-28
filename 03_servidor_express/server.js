const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hola Trassierra');
});

app.listen(3000, function() {
    console.log('Servidor escuchando en el puerto 3000!');
});