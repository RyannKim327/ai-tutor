import { readFileSync, writeFileSync } from "fs"
export default function add(week: number, topic: string) {
	let data = readFileSync("data/lists.txt", "utf-8")
	data += `Week ${week}: ${topic}\n`
	writeFileSync("data/lists.txt", data, "utf-8")
}
