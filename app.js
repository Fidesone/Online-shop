const express = require('express');
const { getApiResponse } = require('./openapi_conn');
const app = express();
const port = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.render('index');
});

// Respuesta de la API
app.get('/api', async (req, res) => {
    const pregunta = req.query.pregunta;
    const respuesta = await getApiResponse(pregunta);
    res.send(respuesta);
});

// Pregunta a la API a través de input
app.get('/asking_api.ejs', (req, res) => {
  res.render('asking_api');
});
app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${3000}`);
});