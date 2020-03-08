const Pelicula = require("./Pelicula");
const mongoose = require('mongoose');

// Realizamos la conexión
mongoose.connect('mongodb://localhost:27017/apipeliculas', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        () => { console.log("Conexión a DB realizada"); },
        (err) => { console.log(`Error en la conexión a la DB${err}`); },
    );

// Obtenemos la referencia a la BD
var db = mongoose.connection;

db.once('open', function() {

    let peli = new Pelicula({
        titulo: 'Reservoir dogs',
        anio: 1992,
        encartelera: false
    });

    // Guardamos en la DB
    // peli.save(function(err, Pelicula) {
    //     if (err) return console.error(err);
    //     console.log(`La película "${peli.titulo}" ha sido guardada.`);
    // });

    // Array de pelis
    let pelis = [
        { titulo: 'Start Wars. El retorno del Jedi', anio: 1976, encartelera: false },
        { titulo: 'Start Wars. El imprerio contraataca', anio: 1990, encartelera: false },
        { titulo: 'La amenaza fantasma', anio: 2002, encartelera: false },
        { titulo: 'La trinchera infinita', anio: 2019, encartelera: true }
    ];

    // salvando varios documentos
    // Pelicula.collection.insert(pelis, function(err, docs) {
    //     if (err) {
    //         return console.error(err);
    //     } else {
    //         console.log("Insertadas varias películas");
    //     }
    // });

});