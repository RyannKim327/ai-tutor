import { writeFileSync } from "fs"

export default function addChallenge(r: Record<string, string | number>) {
	writeFileSync(`week-${r.week_number}/readme.md`, r.lesson as string, "utf-8")
	writeFileSync(`week-${r.week_number}/challenge.md`, `"""\nTopic: ${r.topic}\nDifficulty: ${r.difficulty}\n${r.challenge_description}\n"""\n\n${r.program_logic}`, "utf-8")
}
