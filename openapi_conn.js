const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

async function getApiResponse(pregunta) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: pregunta,
    max_tokens: 700,
  });
  
  const result = completion.data.choices[0].text;
  
  return result;
}

module.exports = { getApiResponse };