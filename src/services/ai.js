import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_ARVAN_API_KEY,

  baseURL:
    "https://arvancloudai.ir/gateway/models/DeepSeek-V3.2/3Ol5DKR4deiHedww7p7WSs8Fcab1dlwkuCwtjzppFMs2C-VNh3F1Ru3uqJJXN8tyVHM9OmfgU16yVavpjPVARfh_6LpCYvWqhD1Xrw1a41AkYR1QVlQMT52-wq6KXMXc0cevMCyOXyf-TOxv-OrYx88FZJuXcsv-iqA90BI7rtoPDYQxkVdt60hQs3uiOoJwjfyYhS7pyWX4qVrLLTCj9WggQKjLi0lXkl2xclmB3FfILdeAksfSXOUz_OruK3oL/v1",

  dangerouslyAllowBrowser: true,
});
export async function recommendManga(prompt) {
  const response =
    await client.chat.completions.create({
      model: "DeepSeek-V3-2-hr6gu",
      temperature: 0.8,
      messages: [
        {
          role: "system",
          content: `
You are a manga recommendation engine.

Return ONLY valid JSON.

Recommend exactly 5 manga.

Format:

[
 {
   "title":"",
   "reason":""
 }
]
`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

const raw =
  response.choices[0].message.content;


const clean = raw
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(clean);
}
export async function translateSynopsis(text) {

  const response = await client.chat.completions.create({
    model: "DeepSeek-V3-2-hr6gu",

    temperature: 0,

    messages: [
      {
        role: "system",
        content:
          "You are a Persian translator. Translate ALL user text into fluent Persian. Return ONLY Persian translation and nothing else.",
      },
      {
        role: "user",
        content: text,
      },
    ],
  });



  return response.choices[0].message.content.trim();
}

