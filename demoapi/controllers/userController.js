const User = require("../models/User");

// Listado de USUARIOS
const userList = (req, res) => {
    User.find((err, users) => {
        if (err) {
            res.status(400).json({
                status: 0,
                message: "Error",
            });
        } else {
            res.status(200).json(users);
        }
    });
};

// Crea USUARIO
const userCreate = (req, res) => {
    const { body } = req;

    const user = new User({
        nombre: body.nombre,
        edad: body.edad,
    });

    user.save().then((user) => {
            res.status(200).json({
                state: 1,
                message: "USUARIO creado",
                user,
            });
        })
        .catch((err) => {
            res.status(400).send({
                state: 0,
                message: err.message,
            });
        });
};

// Detalle de USUARIO por ID
const userDetail = (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, user) => {
        if (err) {
            res.json({
                status: 0,
                message: "No existe un USUARIO con ese ID ",
            });
        } else res.json(user);
    });
};

// Detalle de USUARIO por ID
const userByName = (req, res) => {
    const { nombre } = req.params;

    User.findOne(nombre, (err, user) => {
        if (err) {
            res.json({
                status: 0,
                message: "No existe un USUARIO con ese nombre ",
            });
        } else res.json(user);
    });
};

module.exports = {
    userList,
    userDetail,
    userCreate,
    userByName

};