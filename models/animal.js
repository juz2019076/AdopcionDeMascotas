const { Schema, model } = require('mongoose');

const AnimalesSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la mascota obligatorio']
    },

    edadAnimal: {
        type: String,
        required: [true, 'La edad de la mascota es obigatoria']
    },

    tipoAnimal: {
        type: String,
        required: [true, 'El tipo de animal es obligatorio']
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model("Animal", AnimalesSchema);