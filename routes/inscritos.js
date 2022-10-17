const express = require('express');
const router = express.Router();

//Obtener Inscritos
router.get('/', (req, res) => {
    res.send('Hola Mundo')
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