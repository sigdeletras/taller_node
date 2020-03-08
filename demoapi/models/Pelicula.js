const mongoose = require("mongoose");
const { Schema } = mongoose;

const peliculaSchema = new Schema({
    titulo: { type: String },
    anio: { type: Number },
    encartelera: { type: Boolean },
});

module.exports = mongoose.model("Pelicula", peliculaSchema);