const express = require('express');
const inscrito = require('../models/inscrito');
const router = express.Router();
const Inscrito = require('../models/inscrito')

//Obtener Inscritos
router.get('/', async (req, res) => {
    try {
        const inscritos = await Inscrito.find();
        res.status(200).json(inscritos)
    } catch (err) {
        res.status(500).json({message: err.message});
    };
});

//Obtener 1 inscrito
router.get('/:id', (req, res) => {

});

//Crear un Inscrito
router.post('/', (req, res) => {

});

//Actulizar un Inscrito
router.patch('/:id', (req, res) => {

});

//Eliminar un Inscrito
router.delete('/:id', (req, res) => {

});

module.exports = router;