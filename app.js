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

app.get('/api', async (req, res) => {
    const result = await getApiResponse();
    res.send(result);
  });
  

app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${3000}`);
});