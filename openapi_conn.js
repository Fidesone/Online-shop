const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

async function getApiResponse() {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: '¿Hablame del atletico de Madrid?',
    max_tokens: 700,
  });
  
  const result = completion.data.choices[0].text;
  
  return result;
}

module.exports = { getApiResponse };