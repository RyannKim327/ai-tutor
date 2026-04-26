export default function extractor(response: string) {
	const regex = /```json([\w\W]+)```/i
	if (regex.test(response)) {
		return JSON.parse(response?.match(regex)?.[1] as string)
	} else {
		return {
			"response": response
		}
	}
}
