const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 3000;

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

app.get('/', async (req, res) => {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'HAZME UN TEXTO DE 500 PALABRAS SOBRE LA IA',
  });
  
  const result = completion.data.choices[0].text;
  
  res.send(result);
});

app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${3000}`);
});