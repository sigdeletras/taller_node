const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    nombre: {
        type: String,
    },
    edad: {
        type: Number
    }
});
module.exports = mongoose.model("User", userSchema);