import { jsonrepair } from "jsonrepair"

export interface ChallengeData {
  challenge_name?: string
  challenge_description?: string
  category?: string
  topic?: string
  difficulty?: string
  week_number?: number
  program_logic?: string
  lesson?: string
  response?: string
  [key: string]: any
}

export default function extractor(response: string | any): ChallengeData {
  if (!response) {
    return { response }
  }

  if (typeof response === "object") {
    return response
  }

  if (typeof response !== "string") {
    return { response: String(response) }
  }

  // 1. Try extracting content between first '{' and last '}'
  const firstBrace = response.indexOf("{")
  const lastBrace = response.lastIndexOf("}")
  const candidate =
    firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace
      ? response.slice(firstBrace, lastBrace + 1)
      : response.trim()

  // Try direct JSON.parse
  try {
    return JSON.parse(candidate)
  } catch { }

  // Try jsonrepair on the candidate
  try {
    return JSON.parse(jsonrepair(candidate))
  } catch { }

  // Fallback: match markdown code block fences if any
  const codeBlockMatch = response.match(/```(?:json)?\s*([\s\S]*?)\s*```/i)
  if (codeBlockMatch) {
    const blockContent = codeBlockMatch[1].trim()
    try {
      return JSON.parse(blockContent)
    } catch { }
    try {
      return JSON.parse(jsonrepair(blockContent))
    } catch { }
  }

  return {
    response: response
  }
}

