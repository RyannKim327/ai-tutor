import axios from "axios";
import { readFileSync } from "fs"

export default async function ai() {
  const lists = readFileSync("data/lists.txt", "utf-8")
  const { data } = await axios.post("https://api-mpop-backend.onrender.com/ai/chat", {
    messages: [{
      role: "user",
      content: readFileSync("prompt.md", "utf-8").replace("{{challenges}}", lists)
    }]
  })
  return data.content
}
