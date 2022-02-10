const mongoose = require('mongoose');


const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El nombre del pirata es requerido"],
        minlength: [3, "El nombre del pirata debe contener al menos 3 caracteres!"],
        unique: [true, "Ya existe un pirata con el mismo nombre, por fabor agrege uno distinto"]
    },

    image: {
        type: String,
        required: [true, "La imagen del pirata es requerida"],
        minlength: [3, "La imagen del pirata debe contener al menos 3 caracteres"]
    },
      tesoro: {
        type: Number,
         required: [true, "el numero de tesoros es requerido"]
    },

    frase: {
        type: String,
        required: [true, "La frase del pirata es obligatoria"],
        minlength: [10, "La frase del pirata debe contener al menos 10 caracteres"]
    },

     position: {
        type: String,
        required: [true, "El rango del pirata es obligatorio"],

    },


    leg: {
        type: Boolean,
    },
    eye: {
        type: Boolean,
    },
    hand: {
        type: Boolean,
    },

    },
    { timestamps: true }
);


module.exports.Pirate = mongoose.model('Pirate', PirateSchema);