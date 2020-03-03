// Archivo de redirecionamiento

const express = require('express');
const router = express.Router();


router.get('/user', function(req, res) {
    res.send({
        "id": "1",
        "name": "María Martin"
    })
})

let usuarios = [{
        "id": "1",
        "name": "María Martin"
    },
    {
        "id": "2",
        "name": "Juan Juarez"
    },
    {
        "id": "3",
        "name": "Ramón Román"
    }
]

router.get('/users', function(req, res) {
    res.json(usuarios)
})

router.get('/user/:nombre/:edad', function(req, res) {
    let nombre = req.params.nombre
    let edad = req.params.edad

    res.send(`Hola ${nombre}. Tienes  ${edad} años.`)
})

// Rutas con expresiones regulares
router.get('/dni/:id([0-9]{8}[A-Z]{1})', function(req, res) {
    res.send('DNI: ' + req.params.id);
});

//Other routes here
router.get('*', function(req, res) {
    res.send('No es una URL correcta.');
});

router.post('/nuevo', function(req, res) {
    const { nombre, edad } = req.body;
    res.json({
        status: "success",
        nombre,
        edad
    });
});

router.post('/nuevo2', function(req, res) {
    var nombre = req.body.nombre;
    var edad = req.body.edad;
    console.log("User name = " + nombre + ", password is " + edad);
    res.end("User name = " + nombre + ", password is " + edad);
});

router.post('/post', (req, res) => {
    res.json({
        status: "success",
        data: req.body
    });
});

router.post('/user', function(req, res) {
    var nombre = req.body.nombre;
    var edad = req.body.edad;
    if (nombre && edad) {
        res.json({
            status: "success",
            data: req.body
        });
    } else {
        res.status(400).json({
            status: "fail",
            message: "Falta el nombre y/o la edad"
        });

    }

});


module.exports = router;