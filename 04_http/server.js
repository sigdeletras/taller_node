// Incluimos el módulo mediante require y creamos una aplicación de Express.

const express = require('express');
const app = express();

// Definición de ruta que que se llamará cuando se realice una petición GET
// que ejecutará una función (callback) que nos envía un conjunto de caracteres
// como respuesta.

app.get('/', function(req, res) {
    res.send('Hola Trassierra');
});

// 04 HTTP

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

app.get('/usuario/:nombre/:edad', function(req, res) {
    let nombre = req.params.nombre
    let edad = req.params.edad

    res.send(`Hola ${nombre}. Tienes  ${edad} años.`)
})

// Rutas con expresiones regulares
app.get('/dni/:id([0-9]{8}[A-Z]{1})', function(req, res) {
    res.send('DNI: ' + req.params.id);
});

//Otras
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

// Define y crea el servidor, escuchando el puerto 3000 
// e imprime un comentario en la consola.

app.listen(3000, function() {
    console.log('Servidor escuchando en el puerto 3000!');
});