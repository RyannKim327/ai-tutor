import axios from "axios";
import { readFileSync } from "fs"
import * as dotenv from "dotenv"

export default async function ai() {
  dotenv.config()
  const lists = readFileSync("data/lists.txt", "utf-8")
  let data = null

  while (data === null) {
    try {
      const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
        "model": "google/gemma-4-26b-a4b-it:free",
        "messages": [{
          "role": "system",
          "content": readFileSync("prompt.md", "utf-8")
        }, {
          "role": "system",
          "content": `The current and existing challenges are:\n\n${lists}`
        }],
        "stream": false
      }, {
        headers: {
          "Authorization": `Bearer ${process.env.AI_TOKEN}`,
          "Content-Type": "application/json"
        }
      });
      data = response.data.choices[0].message.content
    } catch (e: unknown) {
      console.log(e)
    }
  }
  return data
}
