const mongoose = require('mongoose');

const inscritoSchema = new mongoose.Schema({
    tipoDocumento:{
        type: String,
        required: true
    },
    identificacion:{
        type: String,
        required: true
    },
    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    telefonoFijo:{
        type: String,
        required: true
    },
    celular:{
        type: String,
        required: true
    },
    linkComprobante:{
        type: String,
        required: true
    },
    codigoIcfes:{
        type: String,
        required: true
    },
    familiarEstudiando:{
        type: Boolean,
        required: true,
        default: false
    },
    estrato:{
        type: Number,
        required: true
    },
    tipoColegio:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('inscrito', inscritoSchema, 'Inscritos');