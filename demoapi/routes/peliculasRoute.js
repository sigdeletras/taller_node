const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculasController')

// router.get('/peliculas', function(req, res) {
//     res.send("GET  listado de peliculas")
// })

router.get('/peliculas', peliculaController.peliculaList)

// router.get('/peliculas/:id', function(req, res) {
//     res.send("GET pelicula por ID")
// })

router.get('/peliculas/:id', peliculaController.peliculaDetail)

// router.get('/peliculas/titulo/:titulo', function(req, res) {
//     res.send("GET busca película texto del título")
// })

router.get('/peliculas/titulo/:titulo', peliculaController.peliculaByTitle)

// router.get('/peliculas/cartelera/:encartelera', function(req, res) {
//     res.send("GET listado de películas que están/no están en cartelera")
// })

router.get('/peliculas/cartelera/:encartelera', peliculaController.peliculaByCartelera)

// router.post('/peliculas', function(req, res) {
//     res.send("POST Nueva película")
// })

router.post('/peliculas', peliculaController.peliculaCreate)

// router.put('/peliculas/:id', function(req, res) {
//     res.send("PUT Actualiza película por ID")
// })

router.put('/peliculas/:id', peliculaController.peliculaUpdate)


// router.delete('/peliculas/:id', function(req, res) {
//     res.send("DELETE Borra película por ID")
// })

router.delete('/peliculas/:id', peliculaController.peliculaDelete)

module.exports = router;