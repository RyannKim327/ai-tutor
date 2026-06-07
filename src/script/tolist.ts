import { readFileSync, writeFileSync } from "fs"
export default function add(week: number, topic: string, difficulty: string) {
	let data = readFileSync("data/lists.txt", "utf-8")
	// TODO: Removing \n
	if (data.endsWith('\n')) {
		data = data.substring(0, data.length - 1).trim()
	}
	data += `\nWeek ${week} ${topic} [${difficulty}]`
	writeFileSync("data/lists.txt", data, "utf-8")
}
