// Configuracion de Express
const express = require('express');
const app = express();



// Obtener Clientes por ID
app.get('/clientes/:id',[],(req, res) =>{

    // De los parametros de la busqueda /:id recuperamos la información y lo guardamos en la variable
    let id = req.params.id;

    res.json({
        id
    });

})


 
// Funcion para exportar la configuracion de express, siempre va
module.exports = app;