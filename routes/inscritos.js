const express = require('express');
const inscrito = require('../models/inscrito');
const router = express.Router();
const Inscrito = require('../models/inscrito')

//Obtener Inscritos
router.get('/', async (req, res) => {
    try {
        const inscritos = await Inscrito.find();
        res.status(200).json(inscritos);
    } catch (err) {
        res.status(500).json({message: err.message});
    };
});

//Obtener 1 inscrito
router.get('/:id', async (req, res) => {

});

//Crear un Inscrito
router.post('/', async (req, res) => {
    const inscrito = new Inscrito({
        tipoDocumento: req.body.tipoDocumento,
        identificacion: req.body.identificacion,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correo: req.body.correo,
        telefonoFijo: req.body.telefonoFijo,
        celular: req.body.celular,
        linkComprobante: req.body.linkComprobante,
        codigoIcfes: req.body.codigoIcfes,
        familiarEstudiando: req.body.familiarEstudiando,
        estrato: req.body.estrato,
        tipoColegio: req.body.tipoColegio
    });
    try {
        const nuevoInscrito = await inscrito.save();
        res.status(201).json(nuevoInscrito);
    } catch (err) {
        res.status(400).json({message: err.message});
    };
});

//Actulizar un Inscrito
router.patch('/:id', async (req, res) => {

});

//Eliminar un Inscrito
router.delete('/:id', async (req, res) => {

});

async function getInscrito (req, res, next) {
    let inscrito;
    try {
        inscrito = await Inscrito.findById(req.params.id);
        if (inscrito == null) {
            return res.status(404).json({message: 'No se pudo encontrar el usuario inscrito'});
        };
    } catch (err) {
        return res.status(500).json({message: err.message});
    };

    res.inscrito = inscrito;
    next();
};

module.exports = router;