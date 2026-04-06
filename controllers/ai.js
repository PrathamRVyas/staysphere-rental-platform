const {GoogleGenerativeAI} = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({model : "gemini-2.5-flash"});
const { InferenceClient } = require("@huggingface/inference");
const HF_TOKEN = process.env.HF_TOKEN;


module.exports.generateDescription = async (req, res) => {
   console.log("Body received:", req.body);
   console.log("API KEY:", process.env.GEMINI_API_KEY);
   const {title, location, country, category} = req.body;

   const prompt = `Generate a short and catchy description to convince a customer to rent a place named ${title} located in ${location} situated in ${country} and falls under the category ${category}.`;

   const result = await model.generateContent(prompt);

   const description = result.response.text();

   res.json({description});
};


module.exports.getSentiment = async (comment) => {
  const client = new InferenceClient(process.env.HF_TOKEN);
  
  const result = await client.textClassification({
    model: "distilbert/distilbert-base-uncased-finetuned-sst-2-english",
    inputs: comment,
    provider: "hf-inference",
  });

  console.log("HF Result:", JSON.stringify(result));

  const label = result[0].label;
  const score = result[0].score;

  if (score < 0.75) return "Neutral";
  if (label === "POSITIVE") return "Positive";
  if (label === "NEGATIVE") return "Negative";
  return "Neutral";
};