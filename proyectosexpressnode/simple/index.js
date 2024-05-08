const express = require('express');

const app = express();

require('dotenv').config();

app.get('/contactos', (req, res) => {
    res.send('Lista de contactos');

});

app.post('/users' , (req, res) => {
    res.send('nuevo usuario')
});


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT)
});
