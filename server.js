require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.2ghdn9q.mongodb.net/Reto1Node?retryWrites=true&w=majority')
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Conectado a la base de datos'));

app.listen(3000, () => console.log('Servidor Iniciado'));