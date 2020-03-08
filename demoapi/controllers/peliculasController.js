const Pelicula = require("../models/Pelicula");

// GET Listado Películas
const peliculaList = (req, res) => {

    Pelicula.find((err, peliculas) => {
        if (err) {
            res.status(500).json({
                state: 0,
                message: "Error"
            });
        } else {
            res.status(200).json(peliculas);
        }
    });
};

// GET Detalle de Película por ID
const peliculaDetail = (req, res) => {

    let { id } = req.params;

    Pelicula.findById(id, (err, pelicula) => {

        if (err) {
            res.status(500).json({
                state: 0,
                message: err
            });
        }

        if (!pelicula) {
            res.status(400).json({
                state: 0,
                message: "No existe una película con ese ID "
            });
        }
        res.status(200).json(pelicula);

    });
};

// GET Detalle de Película por Título
const peliculaByTitle = (req, res) => {

    let { titulo } = req.params;

    let query = {
        titulo: { $regex: new RegExp(titulo, "i") }
    };

    Pelicula.find(query, (err, pelicula) => {

        if (err) {
            res.status(500).json({
                state: 0,
                message: err
            });
        }

        res.status(200).json(pelicula);

    });
};

// GET Películas en cartelera con  total de resultados
const peliculaByCartelera = (req, res) => {
    let { encartelera } = req.params;

    Pelicula.find({ encartelera }, null, { sort: { anio: -1 } }, (err, pelicula) => {
        if (err) {
            res.status(500).json({
                state: 0,
                message: err
            });
        } else
            res.status(200).json({
                total: pelicula.length,
                pelicula
            });
    });
};

// POST Crea Película
const peliculaCreate = (req, res) => {
    let { titulo, anio, encartelera } = req.body;

    let pelicula = new Pelicula({
        titulo,
        anio,
        encartelera
    });

    // Usamos Promesas
    pelicula
        .save()
        .then(pelicula => {
            res.status(200).json({
                state: 1,
                message: "Película creada",
                pelicula
            });
        })
        .catch(err => {
            res.status(500).send({
                state: 0,
                message: err.message
            });
        });
};

// PUT Actualiza Película

const peliculaUpdate = (req, res, next) => {

    Pelicula.findById(req.params.id, (err, pelicula) => {
        if (!pelicula) {
            return res.status(400).json({
                state: 0,
                message: "No se ha encontrado película con id indicado ",
                message: err.message,
            });
        }

        let { id } = req.params;
        let { body } = req;

        Pelicula.findByIdAndUpdate(id, body, { new: true }, (err, peliculaDB) => {

            if (err) {
                return res.status(500).json({
                    state: 0,
                    message: err.message,
                });
            }
            res.status(200).json({
                state: 1,
                message: "Película actualizada",
                peliculaDB,
            });
        });
    });
};

// DELETE Borrar película
const peliculaDelete = (req, res) => {

    Pelicula.findByIdAndRemove({ _id: req.params.id }, (err, pelicula) => {
        if (err) {
            return res.status(500).json({
                state: 0,
                message: err,
            });
        }

        if (!pelicula) {
            return res.status(400).json({
                state: 0,
                message: "Película no encontrada",
            });
        }

        res.status(200).json({
            state: 1,
            pelicula: pelicula.titulo,
            message: "Película borrada",

        });
    });
};

module.exports = {
    peliculaList,
    peliculaDetail,
    peliculaByTitle,
    peliculaByCartelera,
    peliculaCreate,
    peliculaUpdate,
    peliculaDelete
};