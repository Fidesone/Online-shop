const express = require('express');
const app = express();

const openai = require('openai');
const apiKey = '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';
openai.apiKey = apiKey;

// Configura el prompt y los parámetros para el modelo
const prompt = 'Hola, ¿cómo estás?';
const model = 'text-davinci-003';
const maxTokens = 100;

app.get('/', async (req, res) => {
  try {
    // Crea una solicitud de completado para la API de OpenAI
    const response = await openai.Completion.create({
      engine: model,
      prompt: prompt,
      max_tokens: maxTokens,
    });

    // Recupera la respuesta del modelo
    const outputText = response.choices[0].text;
    console.log(outputText);
    res.send(outputText);
  } catch (error) {
    console.log(error);
    res.send('Ha ocurrido un error');
  }
});

app.listen(3000, () => {
  console.log('El servidor está running... en el puerto 3000');
});
