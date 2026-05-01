import { readFileSync, writeFileSync } from "fs"
export default function add(week: number, topic: string) {
	let data = readFileSync("data/lists.txt", "utf-8")
	data += ` ${topic}\nWeek - ${week + 1}:`
	writeFileSync("data/lists.txt", data, "utf-8")
}
