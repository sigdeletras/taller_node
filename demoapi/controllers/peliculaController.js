// Añadimos el modelo
const Pelicula = require("../models/Pelicula");

// GET Listado Películas
const peliculaList = (req, res) => {
    Pelicula.find((err, peliculas) => {
        if (err) {
            res.json({
                message: "Error",
            });
        } else res.json(peliculas)
    });
};

// GET Detalle de PELICULA por ID
const peliculaDetail = (req, res) => {
    let { id } = req.params;
    Pelicula.findById(id, (err, pelicula) => {
        if (err) {
            res.json({
                message: "No existe un PELICULA con ese ID ",
            });
        } else res.json(pelicula);
    });
};

// GET Películas en cartelera con  total de resultados
const peliculaByCartelera = (req, res) => {
    let { encartelera } = req.params;

    Pelicula.find({ encartelera }, null, { sort: { anio: -1 } }, (err, peliculas) => {
        if (err) {
            res.json({
                message: "No existe registros ",
            });
        } else res.json({
            'total': peliculas.length,
            'peliculas': peliculas
        });
    });
};

const peliculaByTitle = (req, res) => {
    let { titulo } = req.params;

    Pelicula.find({ titulo: { $regex: new RegExp(titulo, "i") } }, (err, pelicula) => {
        if (err) {
            res.json({
                message: "No existe un PELICULA con ese título ",
            });
        } else res.json(pelicula);
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
            res.json({
                message: "Película creada",
                pelicula
            });
        })
        .catch(err => {
            res.json({
                message: err.message
            });
        });
};

const peliculaUpdate = (req, res) => {
    Pelicula.findById(req.params.id, (err, pelicula) => {
        if (!pelicula) {
            return res.json({
                message: "No se ha encontrado película con id indicado ",
            });
        }

        let { id } = req.params;
        let { body } = req;

        Pelicula.findByIdAndUpdate(id, body, { new: true }, (err, peliculaDB) => {

            if (err) {
                return res.json({
                    message: err.message,
                });
            }
            res.json({
                message: "Película actualizada",
                peliculaDB,
            });
        });
    });
};

const peliculaDelete = (req, res) => {
    Pelicula.findByIdAndRemove({ _id: req.params.id }, (err, pelicula) => {
        if (err) {
            return res.json({
                message: err,
            });
        }

        if (!pelicula) {
            return res.json({
                message: "Película no encontrada",
            });
        }

        res.json({
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