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
router.get('/:id', getInscrito, async (req, res) => {
    res.json(res.inscrito);
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

//Actualizar un Inscrito
router.patch('/:id', getInscrito, async (req, res) => {
    if (req.body.tipoDocumento != null) {
        res.inscrito.tipoDocumento = req.body.tipoDocumento;
    };
    if (req.body.identificacion != null) {
        res.inscrito.identificacion = req.body.identificacion;
    };
    if (req.body.nombres != null) {
        res.inscrito.nombres = req.body.nombres;
    };
    if (req.body.apellidos != null) {
        res.inscrito.apellidos = req.body.apellidos;
    };
    if (req.body.direccion != null) {
        res.inscrito.direccion = req.body.direccion;
    };
    if (req.body.correo != null) {
        res.inscrito.correo = req.body.correo;
    };
    if (req.body.telefonoFijo != null) {
        res.inscrito.telefono
        Fijo = req.body.telefonoFijo;
    };
    if (req.body.celular != null) {
        res.inscrito.celular = req.body.celular;
    };
    if (req.body.linkComprobante != null) {
        res.inscrito.linkComprobante = req.body.linkComprobante;
    };
    if (req.body.familiarEstudiando != null) {
        res.inscrito.familiarEstudiando = req.body.familiarEstudiando;
    };
    if (req.body.estrato != null) {
        res.inscrito.estrato = req.body.estrato;
    };
    if (req.body.tipoColegio != null) {
        res.inscrito.tipoColegio = req.body.tipoColegio;
    };
    try {
        const updatedInscrito = await res.inscrito.save();
        res.json(updatedInscrito);
    } catch (err) {
        res.status(400).json({message: err.message});
    };
});

//Eliminar un Inscrito
router.delete('/:id', getInscrito, async (req, res) => {
    try {
        await res.inscrito.remove();
        res.status(200).json({message: 'Inscripción eliminada con éxito'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
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