import { readFileSync, writeFileSync } from "fs"
export default function add(week: number, topic: string) {
	let data = readFileSync("data/lists.txt", "utf-8")
	// TODO: Removing \n
	if (data.endsWith('\n')) {
		data = data.substring(0, data.length - 1).trim()
	}
	data += ` ${topic}\nWeek ${week + 1}:`
	writeFileSync("data/lists.txt", data, "utf-8")
}
